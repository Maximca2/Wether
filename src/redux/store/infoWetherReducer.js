import { createAction, createReducer } from "@reduxjs/toolkit";

import { FETCH_INFO_ABOUT_CUR_PLACE, TAKE_CORDINATES } from "./actions";

export const fetchWetherInfo = createAction(FETCH_INFO_ABOUT_CUR_PLACE)
export const takeCordinates = createAction(TAKE_CORDINATES)


const defaultState = {
    curentWetherInfo: {},
    curCordinates: [],

}
//Reducer 
export const infoWetherReducer = createReducer(defaultState, {

    [fetchWetherInfo]: function (state, { payload }) {
        console.log(payload)
        state.curentWetherInfo.info = payload;

    },
    [takeCordinates]: function (state, { payload }) {
        console.log(payload)
        state.curCordinates.push(payload)
    },

})