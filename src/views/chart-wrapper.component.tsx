import React from 'react';
import { Button, Link } from '@carbon/react';

const ChartWrapperComponent: React.FC<{}> = () => {
  const path = window.getOpenmrsSpaBase();
  return (
    <div>
      <Link href={`${path}home/graphical-charts/build`} passHref>
        <Button>Chart Builder</Button>
      </Link>
    </div>
  );
};

export default ChartWrapperComponent;
