import React from 'react';
import { Button, Link } from '@carbon/react';
import styles from './charts.scss';
import IllustrationComponent from '../components/illustration/illustration.component';
import { useTranslation } from 'react-i18next';
import { useChartWrapper } from '../hooks/useChartWrapper';
import { useSelector } from 'react-redux';
import ChartSelectorComponent from "../components/charts/chart-selector.component";

const ChartWrapperComponent: React.FC<{}> = () => {
  const path = window.getOpenmrsSpaBase();
  const { t } = useTranslation();

  const { isLoading, formattedData } = useChartWrapper();
  // console.log('formatted data', formattedData);
  const chartConfig = useSelector((state: any) => state.charts);

  return (
    <div className={styles.page}>

      <div className={styles.header}>
        <IllustrationComponent />
        <div className={styles.headerTextWrapper}>
          <p className={styles.headerSubText}>{t('graphicalReports', 'Graphical Reports')}</p>
          <p className={styles.headerTitle}>{t('home', 'Home')}</p>
        </div>
      </div>

      <div className={styles.builderAction}>
        <Link href={`${path}home/graphical-charts/build`} passHref>
          <Button>Chart Builder</Button>
        </Link>
      </div>
      {chartConfig.map(config => (
        <ChartSelectorComponent config={config} data={formattedData} />
      ))}


    </div>
  );
};

export default ChartWrapperComponent;
