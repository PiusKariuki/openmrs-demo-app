import React from 'react';
import styles from './home.component.scss';
import ChartWrapperComponent from "../components/chart-wrapper.component";
import Simplebargraph from '../components/Charts/Simplebargraph.component';
import SimplePieChart from '../components/Charts/SimplePieChart.component';

const Home: React.FC<{}> = () => {
  return (
    <div className={styles.page}>
      <Simplebargraph />
      <SimplePieChart />
      <ChartWrapperComponent />
    </div>
  );
};

export default Home;
