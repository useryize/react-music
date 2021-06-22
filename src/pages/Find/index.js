import React, { useReducer } from 'react';
import Banner from './Banner';
import Header from '../../components/Header';
import createContextFind from '../../hooks/Find/createContextFind';
import { reducer, initialState } from '../../hooks/Find/useReducerFind';
const Find = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <createContextFind.Provider value={{ state, dispatch }}>
            <Header />
            <Banner />
        </createContextFind.Provider>
    )
};
export default Find;