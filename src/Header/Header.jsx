import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 1em;
  padding-right: 1em;
  background-color: #22f;
  color: white;
`

const Logo = styled.h1`
  cursor: pointer;
`

const LinkContainer = styled(Container)`
  width: 15%;
`

const LinkWrapper = styled(Link)`
  color: white;
  font-weight: bolder;
  text-decoration: none;
  transition: 500ms;
  &:hover {
    color: black;
    transition: 200ms;
  }
`

const Header = () => {
  const nav = useNavigate();

  return (
    <Container>
      <div>
        <Logo onClick={() => nav('/')}>Yardshapers</Logo>
      </div>
      <LinkContainer>
        <LinkWrapper to='/services'>Our Services</LinkWrapper>
        <LinkWrapper to='/contact-us'>Contact Us!</LinkWrapper>
      </LinkContainer>
    </Container>
  )
}

export default Header