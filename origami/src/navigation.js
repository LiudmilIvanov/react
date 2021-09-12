import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import ShareThoughtsPage from "./pages/share-thoughts";


const Navigaiton = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/share" component={ShareThoughtsPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigaiton;

