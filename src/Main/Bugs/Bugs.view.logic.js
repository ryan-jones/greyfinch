import React from "react";
import { BUGS } from "./utils";
import BaseLayout from "../Layout/Layout.view.logic";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";

import "./Bugs.scss";

const Bugs = props => {
  const [selectedBug, setSelectedBug] = React.useState(BUGS[0]);

  const applyClass = bug => {
    return bug.title === selectedBug.title ? "selected" : "";
  };
  return (
    <BaseLayout>
      <div className='bug'>
        <div className='bug__selectors'>
          {BUGS.map(bug => (
            <button
              className={applyClass(bug)}
              onClick={() => setSelectedBug(bug)}
            >
              {bug.title}
            </button>
          ))}
        </div>
        <div className='example'>
          <div className='example__screenshot'>
            <img src={selectedBug.url} alt={selectedBug.alt} />
          </div>
          <div className='example__description'>
            {selectedBug.description.map(line => ReactHtmlParser(line))}
            <p>
              <strong>Solution: </strong>
              {selectedBug.hotfix}
            </p>
          </div>
        </div>
        <Link to='/'>
          <button className='link-btn'>Go to home page</button>
        </Link>
      </div>
    </BaseLayout>
  );
};

export default Bugs;
