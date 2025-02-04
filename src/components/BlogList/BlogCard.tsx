import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ image, title, description, id, preTitle, Icon }) => {
  return (
    <Link
      href={`problemi/${id}`}
      className="blog_card_shadow flex cursor-pointer flex-col justify-between rounded-xl duration-300 hover:scale-[101%]"
    >
      <div>
        <div className="relative aspect-[1/0.8]">
          <Image className="rounded-xl" src={image} alt="smth" fill></Image>
          <div className="absolute -bottom-8 right-6 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-yellow">
            <div className="absolute">
              <Image src={Icon} width={36} height={36} alt="Task Icon" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h4 className="mt-2 font-Roboto_Condensed text-xl font-semibold text-blue">
            {preTitle}
          </h4>
          <h2 className="font-Roboto_Condensed text-4xl font-medium">
            {title}
          </h2>
          <p>{description}</p>
        </div>
      </div>
      <h4 className="service_page_service_underline common_underline font-Space_Grotesk relative mb-4 ml-2 ml-4 w-fit font-medium text-yellow">
        Saznajte više
      </h4>
    </Link>
  );
};

export default BlogCard;
