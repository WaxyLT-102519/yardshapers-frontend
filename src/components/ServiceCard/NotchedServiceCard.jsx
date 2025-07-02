import styled from "styled-components"

// Notched edges of the card
const PsuedoBorder = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    15% 0,
    85% 0,
    100% 15%,
    100% 85%,
    85% 100%,
    15% 100%,
    0 85%,
    0 15%
  );
  padding: 20px;
  width: 405px;
  height: 405px;
  background-color: ${props => props.theme.primary};
`

const Card = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 400px;
  height: 400px;
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
  width: 300px;
  height: 300px;
  overflow: hidden;
`

const Img = styled.img`
  height: 300px;
`

const NotchedServiceCard = ({service}) => {
  return (
    <PsuedoBorder>
      <Card>
        <ImgContainer>
          <Img src={service.src} alt={service.label} />
        </ImgContainer>
        <h2>{service.label}</h2>
      </Card>
    </PsuedoBorder>
  )
}

export default NotchedServiceCard