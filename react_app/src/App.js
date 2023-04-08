import React from "react";
import TopMenuContainer from "./components/topMenuContainer";
import MainContainer from "./components/mainContainer";
import Footer from "./components/footer_test";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = "pk.eyJ1IjoidG9wbG9ic3RlciIsImEiOiJjbGc1Znl6dDcwMWQ1M2VucWd5cmQ3eDR6In0.PC4Hsoa8vKQ1ty914Aw2WQ";

const App = () => {
  return (
    <>
      <TopMenuContainer />
      <MainContainer />
      <Footer />
    </>
  );
};

export default App;
