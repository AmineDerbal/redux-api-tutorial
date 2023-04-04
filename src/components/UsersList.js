import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from './User';
import { getUsersData } from '../store/users/usersSlice';

const UsersList = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>An error has occured</h1>
      </div>
    );
  }

  return (
    <div>
      {users.map((user) => (
        <User key={user.login.uuid} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
