import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import createContextFind from './hooks/App/createContextApp'
import { reducer, initialState } from './hooks/App/useReducerApp'
// import history from './utils/history';
import routesDom from './routes'
const {
    lazy, Suspense,
    useReducer,
    useState,
    useEffect
} = React;

const Player = lazy(() => import('./components/Player'));
const Header = lazy(() => import('./components/Header/header'));



const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [heaterTitle, setHeaterTitle] = useState(null)
    const ElementDOM = ({ item }) => {
        useEffect(() => {
            setHeaterTitle(item)
        })
        return <item.element />
    }
    return (

        <createContextFind.Provider value={{ state, dispatch }}>
            <Suspense fallback={
                null
                // <div>Loading...</div> 
            }>
                <Router>
                    <Header heaterTitle={heaterTitle} />
                    <Routes>
                        {
                            routesDom.map(item => {
                                const { path } = item
                                return <Route key={path} path={path} element={<ElementDOM item={item} />}></Route>
                            })
                        }
                        <Route path='*' element={<Navigate to="/find" />}></Route>
                    </Routes>
                    <Player />
                </Router>
            </Suspense>

        </createContextFind.Provider>
    )
}

export default App;
