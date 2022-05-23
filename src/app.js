import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import createContextFind from './hooks/App/createContextApp'
import { reducer, initialState } from './hooks/App/useReducerApp'
import history from './utils/history';
import routes from './routes'
const { lazy, Suspense, useReducer, useState } = React;
const Player = lazy(() => import('./components/Player'));
const Header = lazy(() => import('./components/Header/header'));

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [heaterTitle, setHeaterTitle] = useState(null)
    return (
        <createContextFind.Provider value={{ state, dispatch }}>
            <Suspense fallback={
                null
                // <div>Loading...</div> 
            }>
                <Header heaterTitle={heaterTitle} />
                <HashRouter history={history}>

                    <Switch>
                        {
                            routes.map(item => {
                                const { path, exact = true, component: C } = item;
                                return <Route
                                    key={path}
                                    path={path}
                                    exact={exact}
                                    // component={C}
                                    render={(props) => {
                                        // props.history.title = item.title
                                        // window.reactMusicTitle = item.title
                                        setHeaterTitle(item)
                                        return <C {...props} key={item.title} title={item.title} />
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
