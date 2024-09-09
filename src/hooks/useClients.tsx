import useSWR from "swr";
import { fhirBaseUrl, openmrsFetch } from "@openmrs/esm-framework";
import { useEffect, useState } from 'react';
import { Link } from '@carbon/react';
import React from 'react';

export interface PatientObject{
  id: string;
  name: string;
  birthDate: string;
  gender: string
}


export interface TableHeadConfig {
  key: string;
  header: string;
}

export const useClients = () => {
  const [cleanData, setCleanData] = useState<Array<PatientObject>>([])

  const { data, error, isLoading, mutate } = useSWR<any, Error>(
    `${fhirBaseUrl}/Patient`,
    openmrsFetch
  );

  useEffect(()=>{
    const baseUrl = window.getOpenmrsSpaBase()

    if(data?.data?.entry.length>0){
      const formattedArray = data.data.entry.map(entry => ({
        id: entry.resource.id,
        name: <Link href={`${baseUrl}patient/${entry.resource.id}/chart`}>{entry.resource.name[0].text}</Link>,
        birthDate: entry.resource.birthDate,
        gender: entry.resource.gender,
      }));

      setCleanData(formattedArray);
    }
  }, [data])

  const tableHeaders = [
    {
      key: "name",
      header: "Full name"
    },
    {
      key: "birthDate",
      header: "Date of Birth",
    },
    {
      key: "gender",
      header: "Gender",
    }
  ]


  return  {data, error, isLoading, tableHeaders, cleanData};
};
