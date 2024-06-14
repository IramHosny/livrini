import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import usersSlice from './usersSlice'
import  articleSlice  from './articleSlice'
import  restaurantSlice  from './restaurantSlice'
import commentSlice from './commentSlice'


export const store = configureStore({
  reducer: {
    user : userSlice,
    users : usersSlice,
    article : articleSlice,
    restaurant : restaurantSlice,
    comment: commentSlice,
 
  },
})