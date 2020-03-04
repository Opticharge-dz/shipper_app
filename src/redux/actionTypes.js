export const SET_GLOBAL = 'SET_GLOBAL'; // merge with global
export const RESET_GLOBAL = 'RESET_GLOBAL'; // reset global

export const SET_AUTH = 'SET_AUTH'; // merge with auth
export const RESET_AUTH = 'RESET_AUTH'; // reset auth

export const FETCH_PROFILE = 'FETCH_PROFILE'; // set auth.user
export const UPDATE_PROFILE = 'UPDATE_PROFILE'; // merge with auth.user
export const RESET_PROFILE = 'RESET_PROFILE'; // reset auth

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES'; // set currencies
export const RESET_CURRENCIES = 'RESET_CURRENCIES'; // reset currencies

export const FETCH_RATES = 'FETCH_RATES'; // merge with currencies
export const RESET_RATES = 'RESET_RATES'; // remove rates from currencies

export const FETCH_CITIES = 'FETCH_CITIES'; // set cities
export const RESET_CITIES = 'RESET_CITIES'; // reset cities

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'; // set countries
export const RESET_COUNTRIES = 'RESET_COUNTRIES'; // reset countries

export const FETCH_OFFERS = 'FETCH_OFFERS'; // set offers
export const DELETE_OFFER = 'DELETE_OFFER'; // delete from offers
export const CREATE_OFFER = 'CREATE_OFFER'; // add to offers
export const RESET_OFFERS = 'RESET_OFFERS'; // reset offers

export const FETCH_DEVICE = 'FETCH_DEVICE'; // get device
export const DELETE_DEVICE = 'DELETE_DEVICE'; // delete device
export const CREATE_DEVICE = 'CREATE_DEVICE'; // add device
export const UPDATE_DEVICE = 'UPDATE_DEVICE'; // update device
export const RESET_DEVICE = 'RESET_DEVICE'; // remove device (locally only)
