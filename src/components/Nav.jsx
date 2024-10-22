import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Create</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}
