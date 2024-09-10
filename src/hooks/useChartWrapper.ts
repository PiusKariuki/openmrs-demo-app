import useSWR from 'swr';
import { fhirBaseUrl, openmrsFetch } from '@openmrs/esm-framework';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const useChartWrapper = () => {
  const chartConfig = useSelector((state: any) => state.charts);
  const endpointUrl = `${fhirBaseUrl}/Patient`;
  const [formattedData, setFormattedData] = useState<any[]>([]);

  const params = {};

  const fullRequest =
    endpointUrl +
    '?' +
    Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

  const { data, error, isLoading, mutate } = useSWR<any, Error>(`${fullRequest}`, openmrsFetch);

  const groupByMonth = (patients: any) => {
    const groupedPatients = patients.reduce((acc, patient) => {
      const month = new Date(patient.resource.meta.lastUpdated).toISOString().slice(0, 7);
      if (!acc[month]) acc[month] = [];

      acc[month].push(patient);
      return acc;
    }, {});

    const processedArray = Object.keys(groupedPatients).map((key) => ({
      group: key,
      value: groupedPatients[key].length,
      list: groupedPatients[key],
    }));

    return processedArray;
  };

  useEffect(() => {
    if (data?.data?.entry) {
      setFormattedData(groupByMonth(data.data.entry));
    }
  }, [data]);

  return { isLoading, formattedData };
};
