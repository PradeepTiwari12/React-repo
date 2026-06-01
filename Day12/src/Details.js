import { Outlet ,Link} from "react-router"
export default function Details(){
  return(
    <>
    <nav>
         <Link to="/Details">Details</Link>
        <Link to="hello">Hello</Link>
        <Link to="hi">Hi</Link>
       
    </nav>
    
    <h1> welcome to Details Page</h1>
    <Outlet></Outlet>
    </>
  )
}