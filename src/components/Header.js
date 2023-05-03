import { Link } from "react-router-dom";
import Toggle from "./Toggle";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1> World Country Search?</h1>
        </Link>
        <Toggle />
      </nav>
    </header>
  );
}