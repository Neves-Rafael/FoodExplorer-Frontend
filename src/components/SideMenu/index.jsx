import { Input } from "../Input";
import { Footer } from "../Footer";
import { IoMdClose } from "react-icons/io";
import { Container, MenuHeader } from "./style";
import { IoSearchOutline } from "react-icons/io5";

import { useEffect } from "react";
import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../utils/roles"
import { useNavigate } from "react-router-dom";

export function SideMenu({ menuIsOpen, menuIsClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate()
  const verifyAdminRole = user.role === USER_ROLE.ADMIN;

  useEffect(() => {
    function handleResize() {
      window.innerWidth > 1024 ? menuIsClose() : null;
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <MenuHeader className="menu-header">
        <div onClick={menuIsClose}> <IoMdClose size={34}/> Menu </div>
      </MenuHeader>

      <Input icon={IoSearchOutline} placeholder={"Busque por pratos ou ingredients"}/>
      <p className="option" onClick={() => {logout(), navigate("/")}}>Sair</p>

      {verifyAdminRole && 
        <p className="option" onClick={() => navigate("/newplate")}>
          Novo Prato
        </p>
      }
      <Footer />
    </Container>
  );
}
