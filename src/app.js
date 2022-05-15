import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import createContextFind from './hooks/App/createContextApp'
import { reducer, initialState } from './hooks/App/useReducerApp'
import history from './utils/history';

const { lazy, Suspense, useReducer } = React;
const Player = lazy(() => import('./components/Player'));
const Find = lazy(() => import('./pages/Find'));
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const SongSheetDetails = lazy(() => import('./pages/SongSheetDetails'));
const Search = lazy(() => import('./pages/Search'));

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
                        <Route path="/find" component={Find} />
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/songSheetDetails/:id" component={SongSheetDetails} />
                        <Route path="/search" component={Search} />
                        <Route path="/" component={Find} />
                    </Switch>
                </HashRouter>
                <Player />
            </Suspense>
        </createContextFind.Provider>
    )
}

export default App;
