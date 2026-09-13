import styled from "styled-components"

const ServiceCard = ({ service }) => {
  return (
    <Flex justify="center" align="center">
      <img src={service.src} alt={service.label} />
      <h3>{service.label}</h3>
      <p>{service.description}</p>
    </Flex>
  )
}

export default ServiceCard