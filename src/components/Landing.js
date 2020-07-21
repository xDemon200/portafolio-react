import React from "react";
import Header from "./header";
import Home from "./home";
import Work from "./Work";
import Contact from "./Contact";

import data from "./yourdata";

const Landing = () => {
  return (
    <div>
      <Header name={data.name} contactEmail={data.contactEmail}></Header>
      {/* <Home
        name={data.landingPageName}
        paragraph={data.landingPagePara}
        authorImage={data.landingPageImage}
      /> */}
      {/*  <Work projects={data.projects}></Work>
      <Contact
        contactEmail={data.contactEmail}
        contactPara={data.contactPara}
        socialLinks={data.social}
      /> */}
    </div>
  );
};

export default Landing;
