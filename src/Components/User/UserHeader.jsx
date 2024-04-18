import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    setTitle(location.pathname);
    if (location.pathname.includes('/conta/esta')){
      setTitle('Estatísticas');
    } else if (location.pathname.includes('/conta/postar')) {
      setTitle('Poste Sua Foto');
    } else {
      setTitle('Minha Conta');
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
