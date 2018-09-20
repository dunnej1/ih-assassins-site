import React, { Component } from "react";


class Admintasks extends Component {
  render() {
    return (
      <div>
        <div>

          <h4>Add Player:</h4>
          <div className="admin-form">
            <form action="/api-createplayer" method="post">
              <input type="text" placeholder="firstname" name="firstname" required/><br/>
              <input type="text" placeholder="lastname" name="lastname" required/><br/>
              <input type="submit" value="Submit"/>
            </form>
          </div>

          <h4>Record Kill:</h4>
          <div className="admin-form">
            <form method="get">
              <input type="text" placeholder="killer" name="killer"/><br/>
              <input type="text" placeholder="victim" name="victim"/><br/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Admintasks;
