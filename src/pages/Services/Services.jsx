import styled from "styled-components"

import services from "../../modules/services"
import FilletedServiceCard from "../../components/ServiceCard/FilletedServiceCard"

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
      {services.map(svc => <FilletedServiceCard key={svc.id} service={svc} />)}
    </Grid>
  )
}

export default Services