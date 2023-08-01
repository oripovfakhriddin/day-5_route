import { MainLayout } from "../../layout/main-layout";
import { Link, Outlet } from "react-router-dom";
import "./contact.css"
export const Contact = ()=>{
  return(
    <>
      <MainLayout>
        <div className="box">
          <div className="box__menu">
              <p>
                <Link to="/contact">contact 1</Link>
              </p>
              <p>
                <Link to="/contact/contact2">contact 2</Link>
              </p>
              <p>
                <Link to="/contact/contact3">contact 3</Link>
              </p>
          </div>
          <div className="box__content">
            <Outlet/>
          </div>
        </div>
      </MainLayout>
    </>
  )
} 