import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { infoWetherReducer } from './infoWetherReducer'

const RootReducer = combineReducers({
    toolkit: infoWetherReducer
})

export const store = configureStore({
    reducer: RootReducer,

})
