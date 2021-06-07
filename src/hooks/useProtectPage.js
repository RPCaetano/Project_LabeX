import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export const useProtectPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    }
  }, [history]);
};
export default useProtectPage;
