import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function Layout(){
    return<>
    <div className="min-vh-100">
    <Nav/>
    <Outlet/>
    <Footer/> 
    </div>
    </>
}
export default Layout