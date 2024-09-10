import React from 'react';
import { LineChart, SimpleBarChart } from '@carbon/charts-react';

enum chartType {
  line = 'line',
  bar = 'bar',
  area = 'area',
}

interface Props {
  config: {
    name: string;
    type: chartType;
    data: Array<any>;
  };
  data: Array<{
    group: string;
    value: string;
    list: Array<any>;
  }>;
}

export enum ScaleTypes {
  TIME = "time",
  LINEAR = "linear",
  LOG = "log",
  LABELS = "labels",
  LABELS_RATIO = "labels-ratio",
}

const ChartSelectorComponent: React.FC<Props> = ({ config, data }) => {

  const chartOptions = {
    title: config.name,
    axes: {
      left: {
        mapsTo: 'value',
      },
      bottom: {
        mapsTo: 'group',
        scaleType: 'labels' as ScaleTypes,
      },
    },
    height: '400px',
  };
  return (
    <>
      {config.type === chartType.bar ? (
        <SimpleBarChart options={chartOptions} data={data} />
      ) : config.type === chartType.line ? (
        <LineChart options={chartOptions} data={data} />
      ) : null}
    </>
  );
};

export default ChartSelectorComponent;
