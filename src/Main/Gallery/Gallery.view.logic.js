import React from "react";
// components
import GalleryView from "./Gallery.view.js";
import BaseLayout from "../Layout/Layout.view.logic";
// actions and utils
import { fetchGif } from "../../Store/actions/gif.actions";
import { LANGUAGES, randomAnimal } from "./utils";
// dependencies
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import get from "lodash/get";
import { Link } from "react-router-dom";
// custom hooks
import { usePrevious } from "../../hooks/usePrevious";
import "./Gallery.scss";

const initialAnimal = randomAnimal();

const Gallery = ({ gif, fetchGif }) => {
  const [language, setLanguage] = React.useState(LANGUAGES[0]);
  const [animal, setAnimal] = React.useState(initialAnimal);
  const previous = usePrevious(animal);
  React.useEffect(() => {
    fetchNew();
  }, []);

  React.useEffect(() => {
    const selected = LANGUAGES.find(value => value.lang === language);
    if (selected) {
      setLanguage(selected);
    }
  }, [language]);

  const fetchNew = (selectedAnimal = null) => {
    let newAnimal = selectedAnimal || randomAnimal();
    while (newAnimal === previous) {
      newAnimal = randomAnimal();
    }
    setAnimal(newAnimal);
    fetchGif(newAnimal, language);
    if (!selectedAnimal) document.getElementById("inputField").value = "";
  };

  const debounceHandler = (func, time) => {
    const debounced = debounce(func, time);
    return e => {
      e.persist();
      return debounced(e);
    };
  };

  const handleInputChange = e => {
    fetchNew(e.target.value);
  };

  return (
    <BaseLayout>
      <GalleryView>
        <div className='gallery__img'>
          <img src={get(gif, "downsized.url", "")} alt='gallery img' />
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
            <select onChange={e => setLanguage(e.target.value)}>
              {LANGUAGES.map(value => (
                <option key={value.lang} value={value.lang}>
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
const mapStateToProps = state => ({
  gif: state.gif
});
const mapDispatchToProps = {
  fetchGif
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
