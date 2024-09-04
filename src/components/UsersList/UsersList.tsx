import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { NotFound } from '../NotFound';
// import { User } from '../../types/User';

// function includesQuery(str: string, query: string): boolean {
//   return str.toLowerCase().includes(query.toLowerCase());
// }

export const UsersList: React.FC = () => {
  const { users } =
    useAppSelector(state => state.users);

  // const visibleUsers: User[] = users
  //   .filter(user => includesQuery(user.name, queryName))
  //   .filter(user => includesQuery(user.username, queryUserName))
  //   .filter(user => includesQuery(user.email, queryEmail))
  //   .filter(user => includesQuery(user.phone, queryPhone));

  return (
    <tbody>
      {users.length ? (
        users.map(user => (
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
