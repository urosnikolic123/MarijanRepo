import React from "react";
import BlogCard from "./BlogCard";

const BlogList = ({ pagesData }) => {
  console.log(pagesData);
  return (
    <section className="container">
      <ul className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {pagesData.map(({ image, title, description, id, preTitle, Icon }) => (
          <BlogCard
            key={id}
            id={id}
            preTitle={preTitle}
            image={image}
            Icon={Icon}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
