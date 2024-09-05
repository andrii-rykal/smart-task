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
            dispatch(usersActions.filter({
              filterBy: 'name',
              value: e.target.value.trim(),
            }));
          }}
          onBlur={e => {
            e.target.value = '';
            dispatch(usersActions.initial());
          }}
        />
      </td>
      <td>
        <input
          className="input is-info is-rounded"
          name="username"
          type="text"
          onChange={e => {
            dispatch(usersActions.filter({
              filterBy: 'username',
              value: e.target.value.trim(),
            }));
          }}
          onBlur={e => {
            e.target.value = '';
            dispatch(usersActions.initial());
          }}
        />
      </td>
      <td>
        <input
          className="input is-info is-rounded"
          name="email"
          type="text"
          onChange={e => {
            dispatch(usersActions.filter({
              filterBy: 'email',
              value: e.target.value.trim(),
            }));
          }}
          onBlur={e => {
            e.target.value = '';
            dispatch(usersActions.initial());
          }}
        />
      </td>
      <td>
        <input
          className="input is-info is-rounded"
          name="phone"
          type="text"
          onChange={e => {
            dispatch(usersActions.filter({
              filterBy: 'phone',
              value: e.target.value.trim(),
            }));
          }}
          onBlur={e => {
            e.target.value = '';
            dispatch(usersActions.initial());
          }}
        />
      </td>
    </tr>
  );
};
