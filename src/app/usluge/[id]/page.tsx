"use client";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PagesTitle from "@/components/PagesTitle/PagesTitle";
import ServiceIntroSection from "@/components/ServiceIntroSection/ServiceIntroSection";
import PageUniquePoints from "@/components/PageUniquePoints/PageUniquePoints";
import pagesData from "../data.json";
import PageMainText from "@/components/PageMainText/PageMainText";
import PageClosingText from "@/components/PageClosingText/PageClosingText";
import AboutUsPreFooter from "@/components/AboutUsPreFooter/AboutUsPreFooter";
import ServicesSideSection from "@/components/ServicesSideSection/ServicesSideSection";
import ServiceServicesList from "@/components/ServiceServicesList/ServiceServicesList";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const data = pagesData.find((item) => item.id === id);
  const serviceListData = pagesData.filter((item) => item.id !== id);

  if (!data) {
    return <div>Page not found</div>;
  }

  return (
    <div className="flex flex-col gap-12">
      <Header />
      <PagesTitle
        date="December 13, 2022"
        title={data.title}
        description={data.description}
      />
      <div className="container flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-24">
          <ServiceIntroSection image={data.image} category={data.preTitle} />
          <PageMainText
            preTitle={data.mainTextData.preTitle}
            title={data.mainTextData.title}
            postTitle={data.mainTextData.postTitle}
            text={data.mainTextData.text}
          />
          <PageUniquePoints points={data.points} />
          <PageClosingText elements={data.elements} />
        </div>
        <ServicesSideSection />
      </div>
      <div className="mt-20">
        <ServiceServicesList data={serviceListData} />
      </div>
      <div className="py-44">
        <AboutUsPreFooter
          preTitle={data.preEndTitle}
          title={data.endTitle}
          description={data.endText}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;

// ("use client");

// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";
// import PagesTitle from "@/components/PagesTitle/PagesTitle";
// import React, { useEffect, useState } from "react";
// import pageData from "./pageData.js";
// import ServiceIntroSection from "@/components/ServiceIntroSection/ServiceIntroSection";
// import PageUniquePoints from "@/components/PageUniquePoints/PageUniquePoints";

// type Props = {
//   params: { id: string };
// };

// const Page = ({ params }: Props) => {
//   const [data, setData] = useState(null);
//   const [projectId, setProjectId] = useState("");

//   useEffect(() => {
//     const getid = async () => {
//       const paramId = await params;
//       setProjectId(paramId.id);
//     };
//     getid();
//   }, [params]);

//   useEffect(() => {
//     if (projectId) {
//       const page = pageData.find((item) => item.id == projectId);
//       setData(page);
//     }
//   }, [projectId]);

//   console.log(data);

//   return (
//     <div className="flex flex-col gap-24">
//       <Header />
//       {data && (
//         <>
//           <PagesTitle
//             date={"December 13, 2022"}
//             title={data.title}
//             description={data.description}
//           />
//           <ServiceIntroSection image={data.image} />
//           <PageUniquePoints points={data.points} />
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };

// export default Page;
