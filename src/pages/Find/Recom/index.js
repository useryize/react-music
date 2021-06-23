import React from 'react';
import styles from './index.module.less';
import { findRecomList } from '../../../hooks/Find/useReducerFind';

import createContextFind from '../../../hooks/Find/createContextFind';
const { useContext, useEffect } = React;
const Recom = () => {
    const {
        state,
        dispatch
    } = useContext(createContextFind);
    console.error('asd', state.recomList);
    
    useEffect(() => {
        // other code
        findRecomList({ dispatch });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.recomBox}></div>
    )
}
export default Recom;