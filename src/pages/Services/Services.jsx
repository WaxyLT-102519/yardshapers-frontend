import styled from "styled-components"

import RoundedServiceCard from "../../components/ServiceCard/RoundedServiceCard"
import services from "../../modules/services"

const Services = () => {
  console.log(services)

  return (
    <div>
      {services.map(svc => <RoundedServiceCard key={svc.id} service={svc} />)}
    </div>
  )
}

export default Services