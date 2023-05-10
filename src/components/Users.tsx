import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/vm/get-data").then((data) => {
      console.log(data);
      setPost(data?.data.data);
    });
  }, []);

  return (
    <div>
      Users
      {post?.map((item:any, i) => {
        return (
          <div key={i}>
            <p>{item?.name}{item?.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
