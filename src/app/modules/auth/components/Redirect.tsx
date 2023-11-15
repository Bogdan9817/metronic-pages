import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Redirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/auth/");
  }, []);
  return <div></div>;
}
