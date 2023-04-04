import React from 'react';

const User = ({ user }) => (
  <>
    <p key={user.login.uuid}>
      {user.name.first}
      {'  '}
      {user.name.last}
    </p>
  </>
);

export default User;
