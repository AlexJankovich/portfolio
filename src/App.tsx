import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import {OnlineJob} from "./OnlineJob/OnlineJob";
import Footer from "./Footer/Footer";
import {Contacts} from "./Contacts/Contacts";


function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <OnlineJob/>
            <Contacts />
            <Footer/>
        </div>
    );
}

export default App;
