import styled from "styled-components"

// Rounded blue square card
const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: ${props => props.theme.card.border.style};
  border-radius: ${props => props.theme.card.border.radius};
  padding: 20px;
  width: 400px;
  height: 400px;
  transition: 200ms;
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transition: 200ms;
  }

  &:hover div {
    border: ${props => props.theme.card.border.hovered};
    transition: 200ms;
  }
`

const ImgContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: ${props => props.theme.card.border.style};
  border-radius: 50%;
  width: 300px;
  height: 300px;
  overflow: hidden;
`

const Img = styled.img`
  height: 300px;
`

const RoundedServiceCard = ({service}) => {
  return (
    <Card>
      <ImgContainer>
        <Img src={service.src} alt={service.label} />
      </ImgContainer>
      <h2>{service.label}</h2>
    </Card>
  )
}

export default RoundedServiceCard