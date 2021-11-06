import React, { useState } from "react";
import FilteredList from "./FilteredList";

const initialFilterData = {
  data: [
    { user: "mike@mail.com", rating: 20, disabled: false },
    { user: "greg@mail.com", rating: 14, disabled: false },
    { user: "john@mail.com", rating: 25, disabled: true }
  ]
};
const Filter = () => {
  const [state, setState] = useState(initialFilterData);
  const [filter, setFilter] = useState("");

  const handleChange = e => {
    setFilter(e.target.value);
  };
  const handleCLick = () => {
    setState({ data: state.data.filter(user => user.disabled === false) });
  };
  const handleCLickTrue = () => {
    setState({ data: state.data.filter(user => user.disabled === true) });
  };
  const getVisibleContacts = () => {
    // const { contacts, filter } = this.state;
    if (state.data.length) {
      return state.data.filter(contact => contact.user.toLowerCase().includes(filter.toLowerCase()));
    }
  };
  return (
    <>
      <div className="filter__container">
        {" "}
        <h2>Filter:</h2>
        <div className="filter__elements">
          <input placeholder="Find by name" type="text" name="filter" value={filter} onChange={handleChange} />
          <button onClick={handleCLick}>false</button>
          <button onClick={handleCLickTrue}>true</button>
        </div>
        <FilteredList users={getVisibleContacts()} />
      </div>
    </>
  );
};

export default Filter;
