import React from "react";
import { MainLayout } from "../../layout/main-layout";
import { request } from "../../config/request";
import { Link } from "react-router-dom";
export const Home = () => {
  const [data, setData]=React.useState([]);

  React.useEffect(()=>{
    request.get("/users").then((res)=>setData(res.data));
  },[]);

  return(
    <>
      <MainLayout>
       <div>
        <ul>
          {data?.map((item)=>
          (<li key={item.id}>
            <Link to={`/${item.id}`}>{item.name}</Link>
          </li>))}
        </ul>
       </div>
      </MainLayout>
    </>
  )
}