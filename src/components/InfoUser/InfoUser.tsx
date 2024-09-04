import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as usersActions from '../../features/usersSlice';
import { Loader } from '../Loader';
import { NotUsers } from '../NotUsers';

function includesQuery(str: string, query: string): boolean {
  return str.toLowerCase().includes(query.toLowerCase());
}

export const InfoUser = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error, queryName, queryUserName, queryEmail, queryPhone } = useAppSelector(state => state.users);

  let copyUsers = [...users];

  useEffect(() => {
    dispatch(usersActions.init());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (queryName) {
    copyUsers = copyUsers.filter(user => includesQuery(user.name, queryName));
  }

  if (queryUserName) {
    copyUsers = copyUsers.filter(user =>
      includesQuery(user.username, queryUserName),
    );
  }

  if (queryEmail) {
    copyUsers = copyUsers.filter(user => includesQuery(user.email, queryEmail));
  }

  if (queryPhone) {
    copyUsers = copyUsers.filter(user => includesQuery(user.phone, queryPhone));
  }

  return (
    <table className="m-auto table is-hoverable is-bordered">
      <thead>
        <tr className="is-white">
          <td></td>
          <td>
            <input
              className="input is-info is-rounded"
              name="name"
              type="text"
              onChange={e => {
                dispatch(usersActions.queryName(e.target.value.trim()));
              }}
            />
          </td>
          <td>
            <input
              className="input is-info is-rounded"
              name="username"
              type="text"
              onChange={e => {
                dispatch(usersActions.queryUserName(e.target.value.trim()));
              }}
            />
          </td>
          <td>
            <input
              className="input is-info is-rounded"
              name="email"
              type="text"
              onChange={e => {
                dispatch(usersActions.queryEmail(e.target.value.trim()));
              }}
            />
          </td>
          <td>
            <input
              className="input is-info is-rounded"
              name="phone"
              type="text"
              onChange={e => {
                dispatch(usersActions.queryPhone(e.target.value.trim()));
              }}
            />
          </td>
        </tr>
        <tr className="is-light">
          <th>
            <abbr title="Position">Pos</abbr>
          </th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {copyUsers.length ? (
          copyUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))
        ): (
          <NotUsers />
        )}
      </tbody>
    </table>
  );
};
