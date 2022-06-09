import React, {memo} from 'react';
import {Route, Routes} from "react-router-dom";

import style from './App.module.scss';

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Preloader from "./common/Preloader/Preloader";

const Organization = React.lazy(() => import('./components/Header/Organization/Organization'));
const OtherPage = React.lazy(() => import('./components/Header/OtherPages/OtherPage'));


const App = memo (() =>
        <div className={style.appWrapper}>
            <NavBar/>
            <React.Suspense fallback={<Preloader/>}>
                <Routes>
                    <Route path="/home" element={<OtherPage title="Home Page"/>}/>
                    <Route path="/" element={<Organization/>}/>
                    <Route path="/organization" element={<Organization/>}/>
                    <Route path="/search" element={<OtherPage title="Search Page"/>}/>
                    <Route path="/settings" element={<OtherPage title="Settings Page"/>}/>
                    <Route path="/chat" element={<OtherPage title="Chat Page"/>}/>
                    <Route path="/exit" element={<OtherPage title="Exit Page"/>}/>
                    <Route path="*" element={<OtherPage title="Page Not Found"/>}/>
                </Routes>
            </React.Suspense>
            <Footer/>
        </div>
)

export default App;
