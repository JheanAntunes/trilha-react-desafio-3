import React from "react";
import { Header } from "../../components/Header";
import {
  Column,
  Container,
  CriarText,
  SubtitleLogin,
  TermoParagraph,
  Title,
  TitleLogin,
  Wrapper,
} from "./style";
import { MdEmail, MdLock, MdFace } from "react-icons/md";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="DioLover"
                leftIcon={<MdFace />}
                name="name"
                control={control}
              />
              {errors.name && <span>Nome é obrigatório</span>}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button title="Criar a Conta" variant="secondary" type="submit" />
            </form>
            <Column>
              <TermoParagraph>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </TermoParagraph>
              <CriarText onClick={() => navigate("/login")}>
                Já tem uma conta? Entre
              </CriarText>
            </Column>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default CreateUser;
