import React from 'react';
import styles from './home.component.scss';
import { Extension, ExtensionSlot } from '@openmrs/esm-framework';

const Home: React.FC<{}> = () => {
  return (
    <div className={styles.page}>
      <ExtensionSlot name="clients">
        <Extension />
      </ExtensionSlot>
    </div>
  );
};

export default Home;
