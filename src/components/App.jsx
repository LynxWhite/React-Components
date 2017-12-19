import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'
import root from '../sagas/root'
import PageComponent from './page-component'
import LoginFormController from './greenLogin/login-form-controller'

import '../resources/stylus/default.styl'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
sagaMiddleware.run(root)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={PageComponent}/>
                        <Route path='/auth' component={LoginFormController}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default App
