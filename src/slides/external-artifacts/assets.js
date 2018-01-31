import React from 'react'
import { Slide, Heading, Notes } from 'spectacle'

export default (
  <Slide>
    <Heading textFont="primary" textColor="secondary">
      Assets
    </Heading>
    <Notes>
      Originally bundled into artifact<br/>
      Then checked into both parent app and artifact<br/>
      Hashed by webpack-file loader<br/>
      Added to docker container in known location<br/>
    </Notes>
  </Slide>
)
