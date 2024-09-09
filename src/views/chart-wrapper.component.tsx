import React from 'react';
import { Button, Link } from '@carbon/react';

const ChartWrapperComponent: React.FC<{}> = () => {
  const path = window.getOpenmrsSpaBase();
  return (
    <div>
      This is a chart wrapper
      <Link href={`${path}home/edit`} passHref>
        <Button>Chart Builder</Button>
      </Link>
    </div>
  );
};

export default ChartWrapperComponent;
