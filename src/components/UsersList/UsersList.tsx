import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { NotFound } from '../NotFound';

export const UsersList: React.FC = () => {
  const { visibleUsers } =
    useAppSelector(state => state.users);

  return (
    <tbody>
      {visibleUsers.length ? (
        visibleUsers.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))
      ) : (
        <NotFound />
      )}
    </tbody>
  );
};
