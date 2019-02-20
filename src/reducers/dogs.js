const initialState = {
  imgUrl: '',
  loading : false,
  error : false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "DOG_REQUESTING":
      return {
        ...state,
        loading: true
      }
    case "DOG_FAILTURE":
      return {
        ...state,
        loading: false,
        error : true
      }
    case "DOG_SUCCESS":
      return {
        ...state,
        imgUrl: action.payload,
        loading : false
      }
    default:
      return state
  }
}