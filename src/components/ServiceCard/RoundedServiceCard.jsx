import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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