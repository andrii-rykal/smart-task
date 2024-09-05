import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import * as usersActions from '../../features/usersSlice';
import { Filter } from '../../types/Filter';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  function onBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
    e.target.value = '';
    dispatch(usersActions.initial());
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>, obj: Filter) {
    dispatch(
      usersActions.filter({
        filterBy: obj.filterBy,
        value: obj.value,
      }),
    );
  }

  return (
    <tr className="is-white">
      <td></td>
      <td>
        <input
          className="input is-info is-rounded"
          name="name"
          type="text"
          onChange={e => onChange(e, {filterBy: 'name', value: e.target.value.trim()})}
          onBlur={onBlur}
        />
      </td>
      <td>
        <input
          className="input is-info is-rounded"
          name="username"
          type="text"
          onChange={e => onChange(e, {filterBy: 'username', value: e.target.value.trim()})}
          onBlur={onBlur}
        />
      </td>
      <td>
        <input
          className="input is-info is-rounded"
          name="email"
          type="text"
          onChange={e => onChange(e, {filterBy: 'email', value: e.target.value.trim()})}
          onBlur={onBlur}
        />
      </td>
      <td>
        <input
          className="input is-info is-rounded"
          name="phone"
          type="text"
          onChange={e => onChange(e, {filterBy: 'phone', value: e.target.value.trim()})}
          onBlur={onBlur}
        />
      </td>
    </tr>
  );
};
