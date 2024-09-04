import React from "react";

export const Header: React.FC = () => {
  return (
    <tr className="is-light">
      <th>
        <abbr title="Position">Pos</abbr>
      </th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  );
};
