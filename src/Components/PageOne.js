import React from "react";
import "../App.css";
import sampleobj from "../Components/sample.json";
import { useNavigate } from "react-router-dom";

export default function PageOne() {
  let history = useNavigate();

  const handleClick = (data) => {
    history("/details", {
      state: data,
    });
  };

  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
        {sampleobj.data.map((r, index) => (
          <tr key={index}>
            <td onClick={() => handleClick(r)}>{r.id}</td>
            <td>{r.name}</td>
            <td>{r.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
