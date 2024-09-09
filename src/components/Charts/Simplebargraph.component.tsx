import React, { useState } from 'react';
import { SimpleBarChart } from '@carbon/charts-react';
import '@carbon/charts-react/styles.css';
import { ScaleTypes } from '@carbon/charts-react';

export default function Simplebargraph() {
	const options = {
		title: 'Simple Bar Chart',
		axes: {
			left: {
				mapsTo: 'y',
				title: 'Count',
			},
			bottom: {
				mapsTo: 'x',
				scaleType: ScaleTypes.LABELS,
				title: 'Days',
			}
		}
	}

	const data = [
		{
			x: 'Mon',
			y: 10
		},
		{
			x: 'Tue',
			y: 15
		},
		{
			x: 'Wed',
			y: 25
		},
		{
			x: 'Thu',
			y: 30
		}
	]

    return (
        <div style={{ height: '500px' }}>
			<SimpleBarChart
				data={data}
				options={options}
			></SimpleBarChart>
		</div>
    )
}