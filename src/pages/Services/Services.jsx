import { useState } from "react"
import styled from "styled-components"

import services from "../../modules/services"
import RoundedServiceCard from "../../components/ServiceCard/RoundedServiceCard"
import NotchedServiceCard from "../../components/ServiceCard/NotchedServiceCard"
import SemiCircleServiceCard from "../../components/ServiceCard/SemiCircleServiceCard"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 10px;
  padding: 40px;
`

const Services = () => {
  
  const [demoCard, setDemoCard] = useState("")

  // The goal is for dad to pick out which ones he likes and then I'll
  // keep that one as the main service card
  return (
    <div>
      <button onClick={() => setDemoCard("rounded")}>Rounded border</button>
      <button onClick={() => setDemoCard("notched")}>Notched border</button>
      <button onClick={() => setDemoCard("dometop")}>Dome Top border</button>
      <Grid>
        {services.map(svc => {
          let card = undefined
          if (demoCard === "rounded") {
            card = <RoundedServiceCard key={svc.id} service={svc} />
          } else if (demoCard === "notched") {
            card = <NotchedServiceCard key={svc.id} service={svc} />
          } else if (demoCard === "dometop") {
            card = <SemiCircleServiceCard key={svc.id} service={svc} />
          }
          return card
        })}
      </Grid>
    </div>
  )
}

export default Services