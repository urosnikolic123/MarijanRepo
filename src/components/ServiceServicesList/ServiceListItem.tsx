import Image from "next/image";
import React from "react";

const ServiceListItem = ({
  image,
  id,
  Icon,
  preTitle,
  title,
  description,
  postText,
}) => {
  return (
    <a
      href={`/usluge/${id}`}
      className="my-14 flex cursor-pointer flex-col items-center justify-center gap-1 text-center duration-200 hover:scale-[102%]"
    >
      <div className="relative flex h-36 w-36 flex-col justify-center">
        <Image
          src={image}
          fill
          alt="service"
          className="rounded-full object-cover"
        />
        <div className="absolute -left-6 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-yellow">
          <div className="absolute">
            <Image src={Icon} alt={title} width={42} height={42} />
          </div>
        </div>
      </div>
      <h4 className="mt-2 font-Roboto_Condensed text-xl font-semibold text-blue">
        {preTitle}
      </h4>
      <h2 className="font-Roboto_Condensed text-4xl font-medium">{title}</h2>
      <p>{description}</p>
      <h5 className="service_page_service_underline common_underline relative font-Space_Grotesk font-medium text-yellow">
        Istraži
      </h5>
    </a>
  );
};

export default ServiceListItem;
