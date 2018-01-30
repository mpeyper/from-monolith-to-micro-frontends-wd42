import React from 'react'
import { Slide, Heading, Image } from 'spectacle'
import imageSrc from './images/client.png'

export default (
  <Slide>
    <Heading fit textFont="primary" textColor="secondary">
      How many frontends?
    </Heading>
    <Image src={imageSrc} />
  </Slide>
)
