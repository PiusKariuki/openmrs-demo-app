import React from 'react';
import ChartWrapperComponent from "../views/chart-wrapper.component";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ChartBuilderComponent from "../views/chart-builder.component";


const Home: React.FC<{}> = () => {
  const spaBase = window.getOpenmrsSpaBase();
  return (
    <Provider store={store}>
      <BrowserRouter basename={spaBase}>
        <Routes>
          <Route path={`/home/graphical-charts`} element={<ChartWrapperComponent />} />
          <Route path={`/home/graphical-charts/build`} element={<ChartBuilderComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Home;
