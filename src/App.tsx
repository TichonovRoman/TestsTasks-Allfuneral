import React from 'react';
import style from './App.module.scss';
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Preloader from "./common/Preloader/Preloader";
import LoginPage from "./LoginPage/LoginPage";
const Organization = React.lazy(() => import('./Header/Organization/Organization'));
const OtherPage = React.lazy(() => import('./Header/OtherPages/OtherPage'));


function App() {
    return (
        <div className={style.appWrapper}>
            <NavBar/>
            <React.Suspense fallback={<Preloader/>}>
            <Routes>
                <Route path={"/home"} element={<OtherPage title={"Home Page"}/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/"} element={<OtherPage title={"Main Page"}/>}/>
                <Route path={"*"} element={<OtherPage title={"Page Not Found"}/>}/>
                <Route path={"/organization"} element={<Organization/>}/>
                <Route path={"/search"} element={<OtherPage title={"Search Page"}/>}/>
                <Route path={"/settings"} element={<OtherPage title={"Settings Page"}/>}/>
                <Route path={"/chat"} element={<OtherPage title={"Chat Page"}/>}/>
                <Route path={"/exit"} element={<OtherPage title={"Exit Page"}/>}/>
            </Routes>
            </React.Suspense>
            <Footer/>
        </div>
    );
}

export default App;
