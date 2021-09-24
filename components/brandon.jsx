import React from "react";

function Brandon(props) {
  return (
    <div>
      <p>Brandon</p>
      <p>{props.props.login}</p>
      <img src={props.props.avatar_url} />
    </div>
  );
}

export default Brandon;
