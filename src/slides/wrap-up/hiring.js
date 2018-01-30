import React from 'react'
import { Slide, Image, Heading, Link, Text} from "spectacle"
import Twitter from 'react-icons/lib/fa/twitter'
import Github from 'react-icons/lib/fa/github'
import Envelope from 'react-icons/lib/fa/envelope'
import ioofLogo from './images/logo.svg'

export default (
  <Slide key="title" transition={["fade"]} bgColor="primary">
    <Image width="40%" src={ioofLogo}>
      ioof
    </Image>
    <Heading lineHeight={1.5} textFont="primary" textColor="secondary">
      We Are Hiring
    </Heading>
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
