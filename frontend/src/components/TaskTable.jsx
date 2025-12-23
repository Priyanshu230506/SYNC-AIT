import React from "react";

const rows = [
  { assignment: "Designs", assignedTo: "Abhinav", deadline: "Dec 20", status: "complete" },
  { assignment: "Winter Project", assignedTo: "FE", deadline: "Dec 25", status: "pending" },
  { assignment: "...........", assignedTo: "Club", deadline: "May 23", status: "ongoing" }
];

export default function TaskTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Assignments</th>
          <th>Assigned To</th>
          <th>Deadline</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td>{r.assignment}</td>
            <td>{r.assignedTo}</td>
            <td>{r.deadline}</td>
            <td>
              <span className={`status ${r.status}`}>{r.status.charAt(0).toUpperCase() + r.status.slice(1)}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
