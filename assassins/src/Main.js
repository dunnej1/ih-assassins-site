import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Killfeed from "./Killfeed";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Assassins 2018</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
                        <li><NavLink to="/killfeed">Killfeed</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/leaderboard" component={Leaderboard}/>
                        <Route path="/killfeed" component={Killfeed}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;