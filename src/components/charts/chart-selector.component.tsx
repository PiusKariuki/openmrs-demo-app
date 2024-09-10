import React from 'react';
import { useSelector } from 'react-redux';
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

const ChartSelectorComponent: React.FC<Props> = ({ config, data }) => {
  const chartState = useSelector((state: any) => state.charts);
  console.log('config', config);
  // console.log("chart state", chartState);

  const chartOptions = {
    title: config.name,
    axes: {
      left: {
        mapsTo: 'value',
      },
      bottom: {
        mapsTo: 'group',
        scaleType: 'labels',
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
