import React from 'react';
import styles from './home.component.scss';
import { Extension, ExtensionSlot } from '@openmrs/esm-framework';
import Simplebargraph from '../components/Charts/Simplebargraph.component';

const Home: React.FC<{}> = () => {
  return (
    <div className={styles.page}>
      <ExtensionSlot name="clients">
        {/* <Extension /> */}
        <Simplebargraph />
      </ExtensionSlot>
    </div>
  );
};

export default Home;
