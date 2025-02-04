import React from "react";
import BlogPost from "./BlogPost";

const SideSection = ({ data }) => {
  return (
    <div className="sticky top-32 flex h-fit flex-col gap-4 font-Roboto_Condensed lg:min-w-[320px]">
      <h4 className="mt-12 text-4xl font-semibold lg:mt-0">Drugi Problemi</h4>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {data.map(({ title, image, description, id }) => (
          <BlogPost
            title={title}
            image={image}
            description={description}
            id={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideSection;
