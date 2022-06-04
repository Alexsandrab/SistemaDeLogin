import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./style";


// pagina home, que é renderizada após o login

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  const {nome} = useAuth();
  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <h2>Bem vindo</h2>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;