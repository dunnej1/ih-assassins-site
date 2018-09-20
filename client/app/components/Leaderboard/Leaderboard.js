import React, { Component } from "react";
import LeaderboardEntry from "./LeaderboardEntry";

class Leaderboard extends Component {
  render() {
    return (
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <LeaderboardEntry name={'Barack Obama'} kills={6} alive={true}/>
        <LeaderboardEntry name={'Donald Trump'} kills={4} alive={true}/>
        <LeaderboardEntry name={'Granit Xhaka'} kills={2} alive={true}/>
        <LeaderboardEntry name={'Praveen Gill'} kills={1} alive={true}/>
      </div>
    );
  }
}

export default Leaderboard;
