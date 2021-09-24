import React from "react";

function MyCard(props) {
  return (
    <div>
      <p>MyCard</p>
      <p>{props.props.login}</p>
      <img src={props.props.avatar_url} />
    </div>
  );
}

export default MyCard;

// import React, { Component } from "react";

// class MyCard extends Component {
//   render() {
//     return (
//       <div>
//         <h2>MyCard. The api stuff goes here. </h2>
//       </div>
//     );
//   }
// }

// export default MyCard;
