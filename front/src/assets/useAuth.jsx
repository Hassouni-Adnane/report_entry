import { useEffect, useState, useRef } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const [isLogin, setLogin] = useState(false);
  const isRun = useRef(false);

  const client = new Keycloak({
    url: "http://localhost:8080/",
    realm: "myrealm",
    clientId: "react-client",
  });

  useEffect(() => {
    
    if(isRun.current) return;
    isRun.current=true;

    client
      .init({ onLoad: "login-required" })
      .then((res) => {
        console.log("Keycloak initialization success:", res);
        setLogin(res);
      })
      .catch((error) => {
        console.error("Keycloak initialization error:", error);
        setLogin(false);
      });
  }, []);

  return isLogin;
};

export default useAuth;
