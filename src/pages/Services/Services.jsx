import styled from "styled-components"

import RoundedServiceCard from "../../components/ServiceCard/RoundedServiceCard"
import services from "../../modules/services"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 10px;
  padding: 40px;
`

const Services = () => {
  console.log(services)

  return (
    <Grid>
      {services.map(svc => <RoundedServiceCard key={svc.id} service={svc} />)}
    </Grid>
  )
}

export default Services