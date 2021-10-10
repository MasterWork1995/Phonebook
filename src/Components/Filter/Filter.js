import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import s from "./Filter.module.css";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          className={s.input}
          value={value}
          onChange={(e) => dispatch(changeFilter(e.currentTarget.value.trim()))}
        />
      </label>
      ;
    </>
  );
};

export default Filter;
