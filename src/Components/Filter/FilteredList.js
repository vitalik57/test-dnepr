import React from "react";
const FilteredList = ({ users }) => {
  return (
    <>
      <ul>
        {users.map(user => (
          <li>
            <p>{user.user}</p>
            <p>{user.rating}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilteredList;
