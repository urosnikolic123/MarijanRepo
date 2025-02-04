import React from "react";
import Image from "next/image";

const BlogPost = ({ title, description, image, id }) => {
  return (
    <a href={id} className="group flex gap-2 hover:cursor-pointer">
      <div className="relative aspect-[1/1] h-20 w-20 rounded-sm">
        <Image
          src={image}
          alt="smth"
          fill
          className="transform object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h4 className="text-lg font-semibold group-hover:underline">{title}</h4>
        <h6 className="font-medium text-gray-500">{description}</h6>
      </div>
    </a>
  );
};

export default BlogPost;
