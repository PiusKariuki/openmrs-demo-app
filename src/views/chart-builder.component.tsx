import React, { useEffect } from 'react';
import { Button, TextArea } from '@carbon/react';
import { useForm } from 'react-hook-form';
import IllustrationComponent from '../components/illustration/illustration.component';
import styles from './chart-builder.scss';
import { useTranslation } from 'react-i18next';
import { useChartBuilder } from '../hooks/useChartBuilder';


const ChartBuilderComponent: React.FC<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation();

  const { submitHandler, textState } = useChartBuilder();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <IllustrationComponent />
        <div className={styles.headerTextWrapper}>
          <p className={styles.headerSubText}>{t('graphicalReports', 'Graphical Reports')}</p>
          <p className={styles.headerTitle}>{t('home', 'Home')}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <TextArea  labelText="JSON Config for your chart" value={textState} id="charts" rows={10} {...register('charts', { required: 'This field is required' })} />
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default ChartBuilderComponent;
