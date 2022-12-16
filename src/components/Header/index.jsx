import React from 'react'
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'
import {
    Buscar,
    Container,
    Row,
    Menu,
    MenuRight,
    Input,
    Wrapper
} from './styles'


const Header = () => {
  return (
    <Wrapper>
       <Container>
       <Row>

    <img src={logo} alt='logo da dio' />
   <Buscar>
    <Input  placeholder='Buscar...'/>
   </Buscar>
   <Menu>Live Code</Menu>
   <Menu>Global</Menu>
        </Row>
            <Row>

            <MenuRight href='#'>Home</MenuRight>
            <Button  title="Entrar"/>
            <Button  title="Cadastrar"/>
            </Row>
            </Container> 
            </Wrapper>
  )
}
export {Header}