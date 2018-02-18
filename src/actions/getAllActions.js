const GET_ALL_DOCTORS = 'GET_ALL_DOCTORS';
const GET_ALL_DOCTORS_REQUEST = 'GET_ALL_DOCTORS_REQUEST';
const FILTER_DOCTORS_NAME = 'FILTER_DOCTORS_NAME';
const FILTER_DOCTORS_RATING = 'FILTER_DOCTORS_RATING';
const FILTER_DOCTORS_PEDIATRICIAN = 'FILTER_DOCTORS_PEDIATRICIAN';
const FILTER_DOCTORS_PRICE = 'FILTER_DOCTORS_PRICE';
const FILTER_DOCTORS_EXPERIENCE = 'FILTER_DOCTORS_EXPERIENCE';

import * as constants from '../constants/constants'
import axios from 'axios';


export function getAllDoctors() {
  return function (dispatch) {
    dispatch(getDoctorsRequest())
    axios.get(`${constants.ROOT_URL}/doctors/getall`)
      .then(response => {
        let doctors = response.data;
        dispatch(getDoctorsSuccess(doctors))
      })
      .catch((error) => {
        console.log(error)
      });
  }
}



export function filterDoctors(doctors, order) {
  return function (dispatch) {
    console.log(order)
    let filterDoctors = doctors.allResults.doctors.sort(function(a,b) {
      if (order) {
        return a.user.lastName.localeCompare(b.user.lastName)
      } else {
        return b.user.lastName.localeCompare(a.user.lastName)
      }
    })
    dispatch(filterDoctorsSuccess(filterDoctors))
  }
}

export function filterDoctorsPrice(doctors, order) {
  return function (dispatch) {
    let filterDoctors = doctors.allResults.doctors.sort(function(a,b) {
      if (order) {
        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0
      } else {
        return b.price < a.price ? -1 : b.price > a.price ? 1 : 0
      }
    })
    dispatch(filterDoctorsPriceSuccess(filterDoctors))
  }
}

export function filterDoctorsExperience(doctors, order) {
  return function (dispatch) {
    let filterDoctors = doctors.allResults.doctors.sort(function(a,b) {
      if (order) {
        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0
      } else {
        return b.price < a.price ? -1 : b.price > a.price ? 1 : 0
      }
    })
    dispatch(filterDoctorsExperienceSuccess(filterDoctors))
  }
}

export function filterDoctorsRating(doctors, order) {
  return function (dispatch) {
    let filterDoctors = doctors.allResults.doctors.sort(function(a,b) {
      if (order) {
        return a.reting < b.reting ? -1 : a.reting > b.reting ? 1 : 0
      } else {
        return b.reting < a.reting ? -1 : b.reting > a.reting ? 1 : 0
      }
    })
    dispatch(filterDoctorsRatingSuccess(filterDoctors))
  }
}

export function filterPediatrician(doctors, order) {
  let filteredDoctors = doctors
  return function (dispatch) {
    if (order) {
      console.log(filteredDoctors.allResults.doctors)
      let filterDoctors = filteredDoctors.allResults.doctors.filter(item => {return item.pediatrician === true;});
      dispatch(filterPediatricianSuccess(filterDoctors))
    }
    else{
      console.log(filteredDoctors.allResults.doctors)
      dispatch(doctors.allResults.doctors)
    }
  }
}

export function getDoctorsSuccess(doctors) {
  return {
    type: GET_ALL_DOCTORS,
    payload: doctors
  };
}

export function getDoctorsRequest() {
  return {
    type: GET_ALL_DOCTORS_REQUEST,
    isLoading: true
  };
}

export function filterDoctorsSuccess(filterDoctors) {
  return {
    type: FILTER_DOCTORS_NAME,
    payload: filterDoctors
  };
}

export function filterDoctorsRatingSuccess(filterDoctors) {
  return {
    type: FILTER_DOCTORS_RATING,
    payload: filterDoctors
  };
}

export function filterDoctorsExperienceSuccess(filterDoctors) {
  return {
    type: FILTER_DOCTORS_EXPERIENCE,
    payload: filterDoctors
  };
}

export function filterDoctorsPriceSuccess(filterDoctors) {
  return {
    type: FILTER_DOCTORS_PRICE,
    payload: filterDoctors
  };
}

export function filterPediatricianSuccess(filterDoctors) {
  return {
    type: FILTER_DOCTORS_PEDIATRICIAN,
    payload: filterDoctors
  };
}
