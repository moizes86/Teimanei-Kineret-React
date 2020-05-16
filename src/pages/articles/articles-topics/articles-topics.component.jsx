import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesTopics({ articlesArr }) {
  return (
    <ul>
      {articlesArr.map(({ id, ...otherProps }) => (
        <li key={id} className="my-3 pl-3">
          <Link key={id} to={otherProps.linkUrl}>
            {otherProps.title}
            <br />
            <span> {otherProps.subtitle}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
