export const entryLoading = () => ({ type: "DOG_REQUESTING" });
export const entryLoaded = data => ({ type: "DOG_SUCCESS", payload: data });
export const entryLoadError = () => ({ type: "DOG_FAILTURE" });

// export const fetchDogs = () => (
//   dispatch => {
//     dispatch(entryLoading());
//     return fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(data => {
//       dispatch( entryLoaded(data.message) );
//     })
//     .catch(err => {
//       dispatch( entryLoadError() );
//     });
//   }
// );

export const fetchDogs = () => {
  return { type: 'FETCHED_DOG' }
};