// store is like a mini temporary in the middle Database

import { configureStore } from "@reduxjs/toolkit"
import { reducer } from "./RootSlice"

export const store = configureStore({
    reducer,
    devTools: true,
})
