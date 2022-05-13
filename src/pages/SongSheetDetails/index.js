import React, { useReducer } from 'react';
import createContextSong from '@/hooks/SongSheetDetails/createContextSong'
import { reducer, initialState } from '../../hooks/SongSheetDetails/useReducerSong'
import SongList from './SongList'

const Login = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <createContextSong.Provider value={{ state, dispatch, props }}>
            <SongList />
        </createContextSong.Provider>
    )
}

export default Login;
