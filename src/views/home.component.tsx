import React from 'react';
import styles from './home.component.scss';
import ChartWrapperComponent from "../components/chart-wrapper.component";

const Home: React.FC<{}> = () => {
  return (
    <div className={styles.page}>
      <ChartWrapperComponent />
    </div>
  );
};

export default Home;
