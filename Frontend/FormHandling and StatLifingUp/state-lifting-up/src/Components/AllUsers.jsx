import React from 'react';
import UserCard from './UserCard';
import Nav from './Nav';

const AllUsers = ({ users, setPagePtr, setUsers }) => {

    const deleteUser = (email) =>{
        setUsers((prevUsers) => prevUsers.filter(user => user.email !== email));
    }

  return (
    <div className="h-screen w-screen flex flex-col  overflow-hidden">
      {/* Navbar */}
      <Nav setPagePtr={setPagePtr} />

      {/* Grid container taking the remaining viewport height */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-4 p-4 min-h-0 overflow-y-auto lg:overflow-hidden">
        {users.map((user, index) => (
          <UserCard key={index} user={user} onDelete={deleteUser} />
        ))}
      </div>
    </div>
  );
};

export default AllUsers;