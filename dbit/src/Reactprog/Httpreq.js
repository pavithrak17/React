import React, { useState, useEffect } from "react";
import axios from 'axios';

function HttpReq() {
  const [posts, setPosts] = useState([]); // Correct state initialization (empty array)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setPosts(res.data); // Correctly setting the state with the response data
      })
      .catch((err) => {
        console.log(err); // Log the error if the request fails
      });
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>Title:</strong> {post.title} <br />
            <strong>User ID:</strong> {post.userId}
          </li> // Mapping over posts to display titles and user IDs
        ))}
      </ul>
    </div>
  );
}

export default HttpReq;