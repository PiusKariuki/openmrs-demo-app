interface chartConfig {
  name: string,

}

export const setCharts = (chartConfig) => (dispatch) => {
  dispatch({
    type: 'SET_CHARTS',
    payload: chartConfig,
  });
};

