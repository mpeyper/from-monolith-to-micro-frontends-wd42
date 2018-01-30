import React from 'react'
import { Slide, Heading, Image, Notes } from 'spectacle'
import imageSrc from '../images/innovation-day.png'

export default (
  <Slide>
    <Heading fit textFont="primary" textColor="secondary">
      How many frontends?
    </Heading>
    <Image src={imageSrc} />
    <Notes>
      2015
      Team in Melbourne
      Leveraged exisiting microservice APIs
    </Notes>
  </Slide>
)
