import React from "react";
import { useSelector } from "react-redux";

const UserListPage = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserListPage;
