import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import createContextFind from './hooks/App/createContextApp'
import { reducer, initialState } from './hooks/App/useReducerApp'
// import history from './utils/history';
import routesDom from './routes'
const {
    lazy, Suspense,
    useReducer,
    // useState
} = React;

const Player = lazy(() => import('./components/Player'));
const Header = lazy(() => import('./components/Header/header'));

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [heaterTitle, setHeaterTitle] = useState(null)
    return (

        <createContextFind.Provider value={{ state, dispatch }}>
            <Suspense fallback={
                null
                // <div>Loading...</div> 
            }>

                <Router>
                    <Header />
                    <Routes>
                        {
                            routesDom.map(item => {
                                const { path, element: E } = item
                                return <Route key={path} path={path} element={<E />}></Route>
                            })
                        }
                        <Route path='*' element={<Navigate to="/find" />}></Route>
                    </Routes>
                </Router>
                <Player />
            </Suspense>
        </createContextFind.Provider>
    )
}

export default App;
