import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as usersActions from '../../features/usersSlice';
import { Loader } from '../Loader';
import { Search } from '../Search';
import { Header } from '../Header';
import { UsersList } from '../UsersList';

export const InfoUser: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(usersActions.init());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <table className="m-auto table is-hoverable is-bordered">
      <thead>
        <Search />
        <Header />
      </thead>
      <UsersList />
    </table>
  );
};
