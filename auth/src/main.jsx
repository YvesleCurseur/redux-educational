import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userSlice from './features/user'
import themeSlice from './features/theme'

const store = configureStore({
  // Contain collection of reducers of the app
  reducer: {
    // A reducer is a function that takes the current state and an action and returns a new state
    user: userSlice,
    theme: themeSlice,
  }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
