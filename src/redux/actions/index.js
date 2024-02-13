export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const JOB_LIST_RESULTS = "JOB_LIST_RESULTS";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";

export const addToFavourite = (data) => {
  return {
    type: ADD_FAVOURITE,
    payload: data.company_name,
  };
};

export const deleteFromFavourite = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: fav,
  };
};

export const getJobList = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=dev"
      );
      if (resp.ok) {
        let fetched = await resp.json();
        dispatch({
          type: JOB_LIST_RESULTS,
          payload: fetched,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      });
    }
  };
};
