import React from 'react';
import HeaderComponent from "../components/Header.Component";
import BodyComponent from "../components/Body.Component";

const App = () => {
    return (
        <div style={{width: '100%'}}>
            <HeaderComponent/>
            <BodyComponent/>
        </div>
    );
};

export default App;