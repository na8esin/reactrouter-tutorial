import { useNavigate } from "react-router-dom";

export default function Extra() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() =>{navigate('../extra2')}}>
        back
      </button>
      Extra
    </div>
  )
}