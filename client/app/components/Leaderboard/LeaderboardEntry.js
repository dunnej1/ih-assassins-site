// import React from 'react';
//
// const LeaderboardEntry = () => (
//   <div className="entry">
//     <table className="table">
//       <tr>
//         <th>{this.props.name}</th>
//         <th>{this.props.kills}</th>
//         <th>{this.props.alive}</th>
//       </tr>
//     </table>
//   </div>
// );
//
// // LeaderboardEntry.propTypes = {
// //     name: React.PropTypes.string,
// //     kills: React.PropTypes.number,
// //     alive: React.PropTypes.bool
// // };
//
// export default LeaderboardEntry;





import React, { Component } from "react";
// import PropTypes from 'prop-types';

class LeaderboardEntry extends Component {
  render() {
    return (
      <div className="entry">
        <table className="table">
          <tr>
            <th>{this.props.name}</th>
            <th>{this.props.kills}</th>
            <th>{this.props.alive}</th>
          </tr>
        </table>
      </div>
    );
  }
}

export default LeaderboardEntry;
