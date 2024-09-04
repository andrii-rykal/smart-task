import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import * as usersActions from '../../features/usersSlice';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <tr className="is-white">
      <td></td>
      <td>
        <input
          className="input is-info is-rounded"
          name="name"
          type="text"
          onChange={e => {
            dispatch(usersActions.filterName(e.target.value.trim()));
          }}
        />
      </td>
      <td>
        <input
          className="input is-info is-rounded"
          name="username"
          type="text"
          onChange={e => {
            dispatch(usersActions.filterUserName(e.target.value.trim()));
          }}
        />
      </td>
      <td>
        <input
          className="input is-info is-rounded"
          name="email"
          type="text"
          onChange={e => {
            dispatch(usersActions.filterEmail(e.target.value.trim()));
          }}
        />
      </td>
      <td>
        <input
          className="input is-info is-rounded"
          name="phone"
          type="text"
          onChange={e => {
            dispatch(usersActions.filterPhone(e.target.value.trim()));
          }}
        />
      </td>
    </tr>
  );
};
