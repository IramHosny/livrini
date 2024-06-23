import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import usersSlice from './usersSlice'
import  articleSlice  from './articleSlice'
import  restaurantSlice  from './restaurantSlice'
import cartSlice from './cartSlice'
import orderSlice from './orderSlice'

export const store = configureStore({
  reducer: {
    user : userSlice,
    users : usersSlice,
    article : articleSlice,
    restaurant : restaurantSlice,
    cart: cartSlice,
    order : orderSlice,
 
  },
})