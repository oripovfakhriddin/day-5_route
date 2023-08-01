import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact";
import { UserDetail } from "./pages/user-detail";
import { Contact1 } from "./pages/contact/pages/contact1";
import { Contact2 } from "./pages/contact/pages/contact2";
import { Contact3 } from "./pages/contact/pages/contact3";
function App() {
  

  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}>
        <Route index element={<Contact1/>}/>
        <Route path="contact2" element={<Contact2/>}/>
        <Route path="contact3" element={<Contact3/>}/>
      </Route>
      <Route path="/:id" element={<UserDetail/>}/>
      <Route path="*" element={<h1>Page not Found</h1>}/>
    </Routes>
   </>
  )
}

export default App
