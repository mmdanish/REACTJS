import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            setData(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
  return (
    <div>
      <h2>Fetching data using Axios</h2>
      {data.map((datas)=>{
            return(
                <div>
                    <h4>{datas.title}</h4>
                    <li>{datas.body}</li>  
                </div>
            )
      })}
    </div>
  )
}

export default Axios
