import React from 'react';
import styles from './icons.scss';

const ImportExportIllustrationComponent = () => {
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.icon}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.9524 4H29.9524C30.5047 4 30.9524 4.44772 30.9524 5H32V4H36V11H32V9H30.9524V10C30.9524 10.5523 30.5047 11 29.9524 11H27.2857V20.2525L28.4762 21.4429V41.2857C28.4762 42.9426 27.133 44.2857 25.4762 44.2857H23.5238C21.867 44.2857 20.5238 42.9426 20.5238 41.2857V21.4429L21.7143 20.2525V11H19.9524C18.8478 11 17.9524 10.1046 17.9524 9V6.00022C15.2129 6.02578 13 8.25447 13 11H11C11 7.14989 14.1083 4.02561 17.9524 4ZM23.7143 11H25.2857V21.0809L26.4762 22.2714V41.2857C26.4762 41.838 26.0285 42.2857 25.4762 42.2857H23.5238C22.9715 42.2857 22.5238 41.838 22.5238 41.2857V22.2714L23.7143 21.0809V11Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default ImportExportIllustrationComponent;
