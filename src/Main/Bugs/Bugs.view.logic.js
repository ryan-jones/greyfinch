import React from "react";
import { BUGS } from "./utils";
import BaseLayout from "../Layout/Layout.view.logic";
import "./Bugs.css";

const Bugs = props => {
  const [selectedBug, setSelectedBug] = React.useState({
    url: "",
    title: "",
    alt: "",
    description: [],
    hotfix: ""
  });

  React.useEffect(() => setSelectedBug(BUGS[0]), []);

  return (
    <BaseLayout>
      <section className='bug'>
        <div className='bug__selectors'>
          {BUGS.map(bug => (
            <button onClick={() => setSelectedBug(bug)}>{bug.title}</button>
          ))}
        </div>
        <section className='example'>
          <div className='example__screenshot'>
            <img src={selectedBug.url} alt={selectedBug.alt} />
          </div>
          <div className='example__description'>
            {selectedBug.description.map(line => (
              <p>{line}</p>
            ))}
            <p>
              <strong>Solution: </strong>
              {selectedBug.hotfix}
            </p>
          </div>
        </section>
      </section>
    </BaseLayout>
  );
};

export default Bugs;
