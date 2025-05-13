import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaCopyright, FaPhone } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.theme.primary};
`

const Footer = () => {
  const nav = useNavigate();

  return (
    <Container>
      <small><FaCopyright /> 2025 Yardshapers LLC</small>
      <div><FaPhone /><FaFacebook /></div>
    </Container>
  )
}

export default Footer