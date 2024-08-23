import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      {data.map((datas) => {
        return (
          <div>
            <li>{datas.title}</li>
            <li>{datas.body}</li>
          </div>
        );
      })}
    </div>
  );
}

export default FetchData;
