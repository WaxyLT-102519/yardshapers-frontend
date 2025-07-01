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