import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container">
      <div className="mt-3">
        <h3>User Lists</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={handleSearchChange}
            className="form-control"
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="bi bi-search"></i> 
            </span>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
