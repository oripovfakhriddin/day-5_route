import React from 'react'
import { useParams } from 'react-router-dom'
import { request } from '../../config/request';
export const UserDetail = () => {
  const [userData, setUserData]=React.useState({});
  const params=useParams();
  React.useEffect(()=>{
    request.get(`/users/${params.id}`).then((res)=>{setUserData(res.data)})
  },[])

  return (
    <div>
      <h2>{userData?.name}</h2>
      <p>{userData?.email}</p>
      <p>{userData?.phone}</p>
    </div>
  )
}
