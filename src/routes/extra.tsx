import { useNavigate, useHistory } from "react-router-dom";

export default function Extra() {
  const navigate = useNavigate();
  const history = useHistory();

  return (
    <div>
      <button onClick={() =>{navigate('../extra2')}}>
        back
      </button>
      Extra
    </div>
  )
}