import React from 'react';
import Banner from '../../components/Banner';
import createContextFind from '../../hooks/Find/createContextFind';
const Find = () => (
    <createContextFind.Provider value={{}}>
        <Banner />
    </createContextFind.Provider>
);
export default Find;