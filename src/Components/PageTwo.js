import React from "react";

import { useLocation, Link } from "react-router-dom";
import PageOne from "./PageOne";

export default function PageTwo() {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Value</th>
          <th>Config</th>
          <th>Desc</th>
        </tr>
        <tr>
          {Object.keys(location.state).map((r, index) => (
            <td key={index}> {location.state[r]} </td>
          ))}
        </tr>
      </table>

      <Link to="/" exact path={<PageOne />}>
        PageOne
      </Link>
    </div>
  );
}
