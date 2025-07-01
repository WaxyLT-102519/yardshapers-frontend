import styled from "styled-components"

// Notched edges of the card
const PsuedoBorder = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    0 20%,
    10% 0,
    100% 0,
    100% 80%,
    90% 100%,
    0% 100%
  );
  padding: 20px;
  width: 360px;
  height: 360px;
  background-color: ${props => props.theme.primary};
`

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    0 20%,
    10% 0,
    100% 0,
    100% 80%,
    90% 100%,
    0% 100%
  );
  padding: 20px;
  width: 350px;
  height: 350px;
  background-color: white;
`

const ImgContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  overflow: hidden;
`

const Img = styled.img`
  height: 250px;
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