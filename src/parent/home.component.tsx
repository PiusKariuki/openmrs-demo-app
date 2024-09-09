import React from 'react';
import ChartWrapperComponent from "../views/chart-wrapper.component";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const Home: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ChartWrapperComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Home;
