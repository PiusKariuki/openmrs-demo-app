import React from 'react';
import { PieChart } from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';
import { ScaleTypes } from '@carbon/charts-react';

export default function SimplePieChart() {
    const data = [
        {
            group: 'Dental',
            value: 400
        },
        {
            group: 'Ultrasound',
            value: 300
        },
        {
            group: 'X-ray',
            value: 300
        },
        {
            group: 'OPD Visits',
            value: 200
        },
        {
            group: 'OPD Revisits',
            value: 100
        }
    ]

    const options = {
        title: 'Simple Pie Chart',
        height: '400px',
    }


    return (
        <div style={{ height: '500px' }}>
            <PieChart
                data={data}
                options={options}
            ></PieChart>
        </div>
    )
}