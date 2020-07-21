import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Section from "./Section";

// import Home from "./home";
// import Work from "./Work";
// import Contact from "./Contact";

// import data from "./yourdata";

const Landing = () => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Header />
      <Nav />
      <Section />

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
