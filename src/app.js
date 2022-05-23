import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import createContextFind from './hooks/App/createContextApp'
import { reducer, initialState } from './hooks/App/useReducerApp'
import history from './utils/history';
import routes from './routes'
const { lazy, Suspense, useReducer } = React;
const Player = lazy(() => import('./components/Player'));

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <createContextFind.Provider value={{ state, dispatch }}>
            <Suspense fallback={
                null
                // <div>Loading...</div> 
            }>
                <HashRouter history={history}>

                    <Switch>
                        {
                            routes.map(item => {
                                const { path, exact = true, component: C } = item;
                                return <Route
                                    key={path}
                                    path={path}
                                    exact={exact}
                                    render={(props) => {
                                        props.history.title = item.title
                                        return <C {...props} title={item.title} />
                                    }}
                                />
                            })
                        }
                        <Route path="*" render={(props) => {
                            props.history.push({ pathname: "/find", })
                        }} />
                    </Switch>
                </HashRouter>
                <Player />
            </Suspense>
        </createContextFind.Provider>
    )
}

export default App;
