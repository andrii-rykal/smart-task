import { useAppSelector } from '../../app/hooks';
import { User } from '../../types/User';
import { NotUsers } from '../NotUsers';

function includesQuery(str: string, query: string): boolean {
  return str.toLowerCase().includes(query.toLowerCase());
}

export const UsersList = () => {
  const { users, queryName, queryUserName, queryEmail, queryPhone } =
    useAppSelector(state => state.users);

  let visibleUsers: User[] = users
    .filter(user => includesQuery(user.name, queryName))
    .filter(user => includesQuery(user.username, queryUserName))
    .filter(user => includesQuery(user.email, queryEmail))
    .filter(user => includesQuery(user.phone, queryPhone));

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
        <NotUsers />
      )}
    </tbody>
  );
};
