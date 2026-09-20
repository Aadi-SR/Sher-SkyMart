import { useNavigate } from "react-router";
import { toast } from "react-toastify";




let useAuth = () => {

  const navigate = useNavigate();
  let getLS = (key) => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : [];
  };

  let setLS = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  let logout = () =>  {
      let onLogout = () =>{
        localStorage.removeItem("skymart-current-user");
        toast.success("Logged out successfully!");
        navigate("/");
      }
      onLogout()
    };

  return {
    getLS,
    setLS,
    logout
  };
};

export default useAuth;
