import React from 'react'
import { Slide, Heading, Image, Text, Link } from 'spectacle'
import Twitter from 'react-icons/lib/fa/twitter'
import Github from 'react-icons/lib/fa/github'
import Envelope from 'react-icons/lib/fa/envelope'
import microFrontendsImage from './images/micro-frontends-colourful.png'

export default (
  <Slide bgColor="primary">
    <Heading fit textFont="primary" textColor="secondary">
      From Monolith to Micro-Frontends
    </Heading>
    <Image src={microFrontendsImage} width="30%" />
    <Text textAlign="right">
      <Link textFont="secondary" textColor="quartenary" href="https://twitter.com/michaelpeyper" target="_blank">
        @michaelpeyper
      </Link>{' '}
      <Twitter style={{ color: '#1DA1F2' }} />
    </Text>
    <Text textAlign="right">
      <Link textFont="secondary" textColor="quartenary" href="https://github.com/mpeyper" target="_blank">
        /mpeyper
      </Link>{' '}
      <Github style={{ color: '#FFFFFF' }} />
    </Text>
    <Text textAlign="right">
      <Link textFont="secondary" textColor="quartenary" href="mailto:mpeyper7@gmail.com" target="_blank">
        michael.peyper@ioof.com.au
      </Link>{' '}
      <Envelope style={{ color: '#118554' }} />
    </Text>
  </Slide>
)
