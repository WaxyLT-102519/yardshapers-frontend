import { useNavigate } from 'react-router-dom'
import useRedirect from '../hooks/useRedirect'
import { FaFacebook, FaCopyright, FaPhone } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.muted};
`

const CopyrightInfo = styled.small`
  display: flex;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 10%;

`

const PhoneIcon = styled(FaPhone)`
  font-size: 1.5em;
  transition: 500ms;
  &:hover {
    color: white;
    transition: 200ms;
  }
`

const FacebookIcon = styled(FaFacebook)`
  font-size: 1.5em;
  transition: 500ms;
  &:hover {
    color: white;
    transition: 200ms;
  }
`

const Footer = () => {
  const nav = useNavigate();
  const redirectToFacebook = useRedirect('https://www.facebook.com/MIYardshapers/')

  return (
    <Container>
      <CopyrightInfo><FaCopyright /> 2025 Yardshapers LLC</CopyrightInfo>
      <IconContainer>
        <PhoneIcon onClick={() => nav('/contact-us')} />
        <FacebookIcon onClick={() => redirectToFacebook()} />
      </IconContainer>
    </Container>
  )
}

export default Footer