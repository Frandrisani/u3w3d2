import {
  ADD_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  JOB_LIST_RESULTS,
  TURN_OFF_SPINNER,
} from "../actions";

const initialState = {
  favourite: {
    list: [],
  },
  job: {
    list: [],
    isLoading: true,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };
    case JOB_LIST_RESULTS:
      return {
        ...state,
        job: {
          ...state.job,
          list: action.payload,
        },
      };

    case TURN_OFF_SPINNER:
      return {
        ...state,
        job: {
          ...state.job,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
