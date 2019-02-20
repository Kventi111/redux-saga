const entryLoading = () => ({ type : "CAT_REQUESTING" })
const entrySuccess = data => ({ type : "CAT_SUCCESS",payload : data })
const entryError = () => ({type : "CAT_ERROR"})

export const fetchCats = () => (dispatch => {
  dispatch(entryLoading)
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => dispatch(entrySuccess(data)))
    .catch(err => {
      dispatch(entryError())
    })
})