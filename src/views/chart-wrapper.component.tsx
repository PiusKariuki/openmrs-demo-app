import React from 'react';
import { Button, Link, SkeletonPlaceholder, ButtonSkeleton } from '@carbon/react';
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

      <div className={styles.form}>
        <div className={styles.builderAction}>
          <Link href={`${path}home/graphical-charts/build`} passHref>
            {isLoading ? <ButtonSkeleton /> : <Button>{t('chartBuilder', 'Chart Builder')}</Button>}
          </Link>
        </div>

        {formattedData && (
          <div className={styles.charts}>
            {isLoading ? (
              <div style={{ width: '100%', height: '400px' }}>
                <SkeletonPlaceholder style={{ width: '100%', height: '100%' }} />
              </div>
            ): (
              chartConfig.map(config => (
                <ChartSelectorComponent config={config} data={formattedData} />
              ))
            )}
          </div>
        )}
      </div>


    </div>
  );
};

export default ChartWrapperComponent;
