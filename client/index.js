import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

document.addEventListener('DOMContentLoaded', () => {
  const theme = extendTheme({
    semanticTokens: {
      colors: {
        error: 'red.500',
        success: 'green.500',
        primary: {
          default: 'red.500',
          _dark: 'red.400',
        },
        secondary: {
          default: 'red.800',
          _dark: 'red.700',
        },
      },
    },
  })

  // TODO: Since we have two other "providers" in scope, it might help to import this differently to
  // make the name unambiguous, e.g:
  //
  //   import { Provider as ReduxProvider } from 'react-redux'
  //
  //   return (<ReduxProvider>...</ReduxProvider>)
  //
  // or use it qualified like this
  //
  //   import ReactRedux as * from 'react-redux'
  //
  //   return (<ReactRedux.Provider>...</ReactRedux.Provider>)
  //
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain="whai-2022-david.au.auth0.com"
          clientId="myI3RM0KZVHtJ8Tn0wOTSKpHi0K2aqa4"
          redirectUri={window.location.origin}
          audience="https://covid-calculator/api"
        >
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </Auth0Provider>
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
})
