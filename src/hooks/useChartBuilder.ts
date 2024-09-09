import {useDispatch, useSelector} from "react-redux";
import {setChartsAction} from "../redux/actions";
import {useEffect, useState} from "react";

interface SubmitData {
  charts: Array<{
    name: string;
    type: string;
    resource: string;
  }>;
}


export const useChartBuilder = () => {

  const dispatch = useDispatch();
  const chartConfig = useSelector((state:any) => state.charts);
  const [textState, setTextState] = useState<string>('');


  console.log("chart config", chartConfig);

  const submitHandler = (data:any) => {
    console.log('data', JSON.parse(data.charts));
    // @ts-ignore
    dispatch(setChartsAction(JSON.parse(data?.charts)))
  };

  useEffect(() => {
    setTextState(JSON.stringify(chartConfig));
  }, [chartConfig]);

  return {submitHandler, textState, setTextState};
}
