export default function fetchItineraries(country, city) {

  return dispatch => {
      dispatch(fetchItinerariesRequest());

      const uri = `http://localhost:5000/itineraries/${country}/${city}`;


      fetch(uri)
          .then(resp => resp.json())
          .then(res => {
              
              return dispatch(fetchItinerariesSuccess(res))
          })
      .catch(err => dispatch(fetchItinerariesError(err)))
  }
}

const fetchItinerariesSuccess = itineraries => ({
  type: "FETCH_ITINERARIES_SUCCESS",
  payload: itineraries
});

const fetchItinerariesRequest = () => ({
  type: "FETCH_ITINERARIES_REQUEST"
});

const fetchItinerariesError = error => ({
  type: "FETCH_ITINERARIES_FAILURE",
  payload: {
    error
  }
});
