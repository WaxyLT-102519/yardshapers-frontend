import styled from "styled-components"

// semicircle dome top
const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border: ${props => props.theme.card.border.style};
  border-radius: 400px 400px 25px 25px;
  padding: 20px;
  width: 400px;
  height: 500px;
  background-color: white;
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
  width: 250px;
  height: 250px;
  overflow: hidden;
`

const Img = styled.img`
  height: 250px;
`

const SemiCircleServiceCard = ({service}) => {
  return (
    <Card>
      <ImgContainer>
        <Img src={service.src} alt={service.label} />
      </ImgContainer>
      <h2>{service.label}</h2>
    </Card>
  )
}

export default SemiCircleServiceCard