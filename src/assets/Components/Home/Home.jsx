import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const Home = () => {
    const useInfo = useContext(AuthContext);
    console.log(useInfo)
    return (
        <div>
            This is home component
        </div>
    );
};

export default Home;