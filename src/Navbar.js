import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
       Home
      </Link>
      <Link to="/About" className="site-title">
      About
      </Link>
      <ul>
        <CustomLink to="/Contact">Contact</CustomLink>
        <CustomLink to="/service">Service</CustomLink>
        
       
      </ul>
      <Link to="/Login1" className="logout">
      Logout
      </Link>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
