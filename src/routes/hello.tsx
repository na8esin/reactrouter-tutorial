import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <>
      <div>Hello</div>
      <Link to="/home?page=hoge">Click me</Link>
    </>
  )
}