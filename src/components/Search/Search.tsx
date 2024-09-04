import { useAppDispatch } from '../../app/hooks';
import * as usersActions from '../../features/usersSlice';

export const Search = () => {
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
  );
};
