import React from "react";
// components
import GalleryView from "./Gallery.view.js";
import BaseLayout from "../Layout/Layout.view.logic";
// actions and utils
import { fetchGif } from "../../Store/actions/gif.actions";
import { LANGUAGES, randomAnimal } from "./constants";
// dependencies
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import get from "lodash/get";
import has from "lodash/has";
import { Link } from "react-router-dom";
// custom hooks
import { usePrevious } from "../../hooks/usePrevious";
import "./Gallery.scss";
import { Gif } from "../../Store/reducers/gif.reducer.js";

interface Language {
  lang: string;
  text: string;
  name: string;
  cta: string;
  placeholder: string;
  error: string;
}
interface Props {
  gif: Gif;
  fetchGif: Function;
}

const initialAnimal = randomAnimal();

const Gallery = ({ gif, fetchGif }: Props) => {
  const [language, setLanguage] = React.useState(LANGUAGES[0]);
  const [animal, setAnimal] = React.useState(initialAnimal);
  const previous = usePrevious(animal);

  React.useEffect(() => {
    fetchNew();
  }, []);

  const fetchNew = (selectedAnimal = null) => {
    // @ts-ignore
    if (!selectedAnimal) document.getElementById("inputField").value = "";
    let newAnimal: string = selectedAnimal || randomAnimal();
    while (newAnimal === previous) {
      newAnimal = randomAnimal();
    }
    setAnimal(newAnimal);
    fetchGif(newAnimal, language.lang);
  };

  const debounceHandler = (func: any, time: number) => {
    const debounced = debounce(func, time);
    return (e: any) => {
      e.persist();
      return debounced(e);
    };
  };

  const handleInputChange = (e: any) => {
    fetchNew(e.target.value);
  };

  return (
    <BaseLayout>
      <GalleryView>
        <div className='gallery__img'>
          {has(gif, "downsized") ? (
            <img src={get(gif, "downsized.url", "")} alt='gallery img' />
          ) : (
            <p>{language.error}</p>
          )}
          <button onClick={() => fetchNew()}>{language.cta}</button>
        </div>
        <div className='gallery__input'>
          <div className='input-field'>
            <label htmlFor='inputField'>{language.text}</label>
            <input
              id='inputField'
              type='text'
              placeholder={language.placeholder}
              onChange={debounceHandler(handleInputChange, 500)}
            />
          </div>
          <div className='language-selector'>
            <select onChange={e => setLanguage(JSON.parse(e.target.value))}>
              {LANGUAGES.map(value => (
                <option key={value.lang} value={JSON.stringify(value)}>
                  {value.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Link to='/bugs'>
          <button className='link-btn'>Go to bugs page</button>
        </Link>
      </GalleryView>
    </BaseLayout>
  );
};
const mapStateToProps = (state: { gif: Gif }) => ({
  gif: state.gif
});
const mapDispatchToProps = {
  fetchGif
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
