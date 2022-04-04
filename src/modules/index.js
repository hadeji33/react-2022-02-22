import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import { restaurantsSlice } from './restaurants';
import { productsSlice } from './product';
import { basketSlice } from './basket';
import { reviewsSlice } from './reviews';
import { usersSlice } from './users';

export const store = configureStore({
    reducer: combineReducers({
        basket: basketSlice.reducer,
        restaurants: restaurantsSlice.reducer,
        products: productsSlice.reducer,
        reviews: reviewsSlice.reducer,
        users: usersSlice.reducer,
    }),
    middleware: (getDefaultMidddleware) => getDefaultMidddleware().concat(),
    devTools: true,
});
