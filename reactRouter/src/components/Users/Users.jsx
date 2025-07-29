import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
  const { userid } = useParams();
  return (
    <div>{userid}</div>
  )
}

export default Users