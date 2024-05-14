import React from 'react'

interface User{
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
  //nextjs will cache this data on its file system istead of fetching it every time from the network
  //get data every 10sec
  //this caching is only on the fetch function. Third party libraries like axios will not be cached.
  const users: User[] = await res.json();

  return (
    <><h1> Users </h1>
    <p>{new Date().toLocaleDateString()}</p>
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul></>   
  )
}

export default UsersPage;