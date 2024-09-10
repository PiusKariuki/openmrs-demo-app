import React, { useEffect } from 'react';
import { Button, Link, TextArea } from '@carbon/react';
import { useForm } from 'react-hook-form';
import IllustrationComponent from '../components/illustration/illustration.component';
import styles from './charts.scss';
import { useTranslation } from 'react-i18next';
import { useChartBuilder } from '../hooks/useChartBuilder';
import { useNavigate } from 'react-router-dom';
import * as path from 'node:path';
import { useSelector } from 'react-redux';

const ChartBuilderComponent: React.FC<{}> = () => {
  const { submitHandler } = useChartBuilder();
  const chartConfig = useSelector((state: any) => state.charts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      charts: JSON.stringify(chartConfig),
    },
  });

  const { t } = useTranslation();

  const navigate = useNavigate();

  const pathHome = window.getOpenmrsSpaBase() + 'home/graphical-charts';

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <IllustrationComponent />
        <div onClick={() => navigate(`${pathHome}`)} className={styles.headerTextWrapper}>
          <p className={styles.headerSubText}>{t('graphicalReports', 'Graphical Reports Builder')}</p>
          <p className={styles.headerTitle}>
            {t('home', 'Home')}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <TextArea
          labelText="JSON Config for your chart"
          id="charts"
          rows={10}
          {...register('charts', { required: 'This field is required' })}
        />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default ChartBuilderComponent;
