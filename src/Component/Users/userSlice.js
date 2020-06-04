import { createSlice, configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit'
import { userAPI } from '../../api/api'
import logger from 'redux-logger'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    fetching: true
  },
  reducers: {
    setUser(state, action) {
      state.users = action.payload
    },
    setFetching(state, action) {
      state.fetching = action.payload
    }
  }
})

const { setUser, setFetching } = usersSlice.actions;

export const SetUserThunk = () => async dispatch => {
  await userAPI
    .then(response => {
      dispatch(setUser(response.data))
    })
    .catch(err => { })
    .finally(() => {
      dispatch(setFetching(false))
    })
}


export const store = configureStore({
   reducer:usersSlice.reducer,
   middleware:[...getDefaultMiddleware(),logger]})