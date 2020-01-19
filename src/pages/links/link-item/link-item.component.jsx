import React from "react";

import "./link-item.styles.scss";

function LinkItem({ linkUrl, title, target }) {
  return (
    <li className="my-2 pl-3">
      <a href={linkUrl} target={target} rel="noopener noreferrer">
        {" "}
        {title}{" "}
      </a>
    </li>
  );
}

export default LinkItem;

// <ul>
// <a href={linkUrl} target={otherProps.target} rel="noopener noreferrer">
//   <li> {otherProps.title} </li>
// </a>
// </ul>
