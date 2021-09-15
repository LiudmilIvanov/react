import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

import ShareThoughtsPage from "./pages/share-thoughts";
import ProfilePage from "./pages/profile";
import ErrorPage from "./pages/error";



const Navigaiton = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/profile/:userid" component={ProfilePage} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigaiton;


