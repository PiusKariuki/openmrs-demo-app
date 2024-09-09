interface chartConfig {
  name: string;
  type: string;
  resource: string;
}

export const setChartsAction = (chartConfig) => (dispatch: any) => {
  dispatch({
    type: 'SET_CHARTS',
    payload: chartConfig,
  });
};
