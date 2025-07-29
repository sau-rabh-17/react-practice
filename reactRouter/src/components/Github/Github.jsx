import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState([]);
    // useEffect(() => {       
    //     fetch('https://api.github.com/users/sau-rabh-17')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data);
    //             console.log(data);
    //         })
    //         .catch(error => console.error(error));
    // }, []);
    const data = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 flex flex-col items-center">
        <h2>Github User Details</h2>
        <p>Name: {data.name}</p>
        <p>Bio: {data.bio}</p>
        <img src={data.avatar_url} alt="Avatar" className="w-32 h-32 rounded-full" />
        <p>Followers: {data.followers}</p>
        <p>Location: {data.location}</p>
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/sau-rabh-17');
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub user data');
  }
  return response.json();
}