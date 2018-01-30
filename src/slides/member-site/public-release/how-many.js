import React from 'react'
import { Slide, Heading, Image, Notes } from 'spectacle'
import imageSrc from '../images/public-release.png'

export default (
  <Slide>
    <Heading fit textFont="primary" textColor="secondary">
      How many frontends?
    </Heading>
    <Image src={imageSrc} />
    <Notes>
      Sep 2015
    </Notes>
  </Slide>
)
