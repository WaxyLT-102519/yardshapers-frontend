import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 3em;
  padding-right: 3em;
  background-color: ${props => props.theme.primary};
  color: white;
`

const Logo = styled.h1`
  cursor: pointer;
`

const LinkContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 30%;
`

const LinkWrapper = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: larger;
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