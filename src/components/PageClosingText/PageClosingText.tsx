import React from "react";
import ClosingTextElement from "./ClosingTextElement";

const PageClosingText = ({ elements }) => {
  return (
    <section>
      <ul className="flex flex-col border-t-2 border-gray-400">
        {elements.map(({ title, text }, index) => (
          <ClosingTextElement title={title} text={text} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default PageClosingText;
