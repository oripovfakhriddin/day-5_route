import { Header } from "../header";
import { Footer } from "../footer";

export const MainLayout = ({children}) => {
  return (
  <>
    <header><Header/></header>
    <main>{children}</main>
    <footer><Footer/></footer>
  </>
    )
}