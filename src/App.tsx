import React from 'react';
import style from './App.module.scss';
import Footer from "./Footer/Footer";
import Organization from "./Header/Organization/Organization";
import NavBar from "./NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import OtherPage from "./Header/OtherPages/OtherPage";

function App() {
    return (
        <div className={style.appWrapper}>
            <NavBar/>
            <Routes>
                <Route path={"/home"} element={<OtherPage title={"Home Page"}/>}/>
                <Route path={"/organization"} element={<Organization/>}/>
                <Route path={"/search"} element={<OtherPage title={"Search Page"}/>}/>
                <Route path={"/settings"} element={<OtherPage title={"Settings Page"}/>}/>
                <Route path={"/chat"} element={<OtherPage title={"Chat Page"}/>}/>
                <Route path={"/exit"} element={<OtherPage title={"Exit Page"}/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
