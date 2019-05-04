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

const Gallery = ({ gif, fetchGif }) => {
  const [language, setLanguage] = React.useState({
    lang: "en",
    text: "Or choose your own!",
    name: "English",
    cta: "Click to see a new animal!",
    placeholder: "Tiger, snake, dinosaur..."
  });

  React.useEffect(() => {
    fetchNew();
  }, []);

  React.useEffect(() => {
    const selected = LANGUAGES.find(value => value.lang === language);
    if (selected) {
      setLanguage(selected);
    }
  }, [language]);

  const fetchNew = selectedAnimal => {
    const animal = selectedAnimal || randomAnimal();
    fetchGif(animal, language);
  };

  const debounceHandler = (func, time) => {
    const debounced = debounce(func, time);
    return e => {
      e.persist();
      return debounced(e);
    };
  };

  const handleInputChange = e => fetchNew(e.target.value);

  return (
    <BaseLayout>
      <GalleryView>
        <img src={get(gif, "downsized.url", "")} />
        <button onClick={() => fetchNew()}>{language.cta}</button>
        <div>
          <div>
            <label for='inputField'>{language.text}</label>
            <input
              id='inputField'
              type='text'
              placeholder={language.placeholder}
              onChange={debounceHandler(handleInputChange, 500)}
            />
          </div>
          <div>
            <select onChange={e => setLanguage(e.target.value)}>
              {LANGUAGES.map(value => (
                <option value={value.lang}>{value.name}</option>
              ))}
            </select>
          </div>
        </div>
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
