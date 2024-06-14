import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import usersSlice from './usersSlice'
import  articleSlice  from './articleSlice'
import  restaurantSlice  from './restaurantSlice'
import orderSlice from './orderSlice'
import cartSlice from './cartSlice'


export const store = configureStore({
  reducer: {
    user : userSlice,
    users : usersSlice,
    article : articleSlice,
    restaurant : restaurantSlice,
    order : orderSlice,
    cart : cartSlice,
 
  },
})