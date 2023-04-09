import React from 'react';
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import ProfileUserData from "./component/ProfileUserData";
import SignUpPage from "./component/SignUpPage";
import Cookies from "js-cookie";
import Login from "./component/Login";
import Logout from "./component/Logout";
import ResponsiveAppBar from "./component/ResponsiveAppBar";
import Activity from "./component/AktivitaetenGet";
import Nutrition from "./component/ErnaehrungGet";
import Sleeptimes from "./component/SchlafenzeitenGet";
import Lesen from "./component/LesenGet";
import { Buch } from './model/Buch';

axios.interceptors.request.use(function (config) {
    return fetch("/api/csrf").then(() => {
        config.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
        return config;
    });
}, function (error) {
    return Promise.reject(error);
});

function App() {

    return (
        <div className="App">
            <ResponsiveAppBar/>
            <Routes>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/sign-up"} element={<SignUpPage/>}/>
                <Route path={"/profile"} element={<ProfileUserData/>}/>
                <Route path={"/logout"} element={<Logout/>}/>
                <Route path={"/activity"} element={<Activity/>}/>
                <Route path={"/nutrition"} element={<Nutrition/>}/>
                <Route path={"/sleep-times"} element={<Sleeptimes/>}/>
                <Route path={"/lesen"} element={<Lesen/>}/>
            </Routes>
        </div>
    );
}

export default App;
