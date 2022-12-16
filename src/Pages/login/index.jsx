

import { MdEmail, MdLock, MdAccountCircle} from 'react-icons/md'
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"


import {Column,CreateText,ForgetText, Container, Row,SubTitleLogin,Title, TitleLogin,Wrapper } from './styles'


const Login =() => {
  return (<>
 
    <Container>
        <Column>
        <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
        </Column>
        <Column>
         <Wrapper>
            <TitleLogin>
                Comece agora grátis
            </TitleLogin>
            <SubTitleLogin>
                Crie sua conta e make the change
            </SubTitleLogin>
            <form>
            <Input placeholder="Nome completo"  leftIcon={<MdAccountCircle />}/>
            <Input placeholder="Email"  leftIcon={<MdEmail />}/>
            <Input placeholder="Senha" type="password" leftIcon={< MdLock />} />
            <Button   title="Criar minha conta" variant="secondary"/>
            </form>
         </Wrapper>
         <SubTitleLogin>
            Ao clicar em "criar minha conta grátis",<br />
            declaro que aceito as políticas de Privacidade <br />
             e os Termos de uso da Dio.
         </SubTitleLogin>
         <Row>
         <ForgetText>Ja tenho uma conta</ForgetText>  
        
         </Row>
         <Row><CreateText>Fazer login</CreateText></Row>
        </Column>
    </Container>
    </>)
}

export {Login}
