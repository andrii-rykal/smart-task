import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as usersActions from "../features/usersSlice";
import { Loader } from "./Loader";

function includesQuery(str: string, query: string): boolean {
  return str.toLowerCase().includes(query.toLowerCase());
}

export const InfoUser = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);

  const [queryName, setQueryName] = useState("");
  const [queryUserName, setQueryUserName] = useState("");
  const [queryEmail, setQueryEmail] = useState("");
  const [queryPhone, setQueryPhone] = useState("");
  let copyUsers = [...users];

  useEffect(() => {
    dispatch(usersActions.init());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (queryName) {
    copyUsers = copyUsers.filter((user) => includesQuery(user.name, queryName));
  }

  if (queryUserName) {
    copyUsers = copyUsers.filter((user) =>
      includesQuery(user.username, queryUserName)
    );
  }

  if (queryEmail) {
    copyUsers = copyUsers.filter((user) =>
      includesQuery(user.email, queryEmail)
    );
  }

  if (queryPhone) {
    copyUsers = copyUsers.filter((user) =>
      includesQuery(user.phone, queryPhone)
    );
  }

  return (
    <table className="m-auto table is-hoverable is-bordered">
      <thead>
        <tr className="is-white">
          <td></td>
          <td className="control has-icons-left">
            <input
              className="input is-info is-rounded"
              name="name"
              type="text"
              size={1}
              onChange={(e) => {
                setQueryName(e.target.value.trim());
              }}
            />
            <span className="icon is-left">
              <i className="fas fa-search is-medium"></i>
            </span>
          </td>
          <td className="control has-icons-left">
            <input
              className="input is-info is-rounded"
              name="username"
              type="text"
              size={1}
              onChange={(e) => {
                setQueryUserName(e.target.value.trim());
              }}
            />
            <span className="icon is-left">
              <i className="fas fa-search is-medium"></i>
            </span>
          </td>
          <td className="control has-icons-left">
            <input
              className="input is-info is-rounded"
              name="email"
              type="text"
              size={1}
              onChange={(e) => {
                setQueryEmail(e.target.value.trim());
              }}
            />
            <span className="icon is-left">
              <i className="fas fa-search is-medium"></i>
            </span>
          </td>
          <td className="control has-icons-left">
            <input
              className="input is-info is-rounded"
              name="phone"
              type="text"
              size={1}
              onChange={(e) => {
                setQueryPhone(e.target.value.trim());
              }}
            />
            <span className="icon is-left">
              <i className="fas fa-search is-medium"></i>
            </span>
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
        {copyUsers.map((user) => (
          <tr key={user.id} className="">
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
