import React from 'react'
import { Slide, Heading, Link, Table, TableBody, TableRow, TableItem } from "spectacle"
import Twitter from 'react-icons/lib/fa/twitter'
import Github from 'react-icons/lib/fa/github'
import Envelope from 'react-icons/lib/fa/envelope'

export default (
  <Slide transition={["fade"]} bgColor="primary">
    <Heading fit textFont="primary" textColor="secondary" margin="0 0 20% 0">
      From Monolith to Micro-Frontend
    </Heading>
    <Table>
      <TableBody>
        <TableRow>
          <TableItem>
            <Twitter style={{color: "#1DA1F2"}} />
          </TableItem>
          <TableItem textAlign="left">
            <Link textFont="secondary" textColor="quartenary" href="https://twitter.com/michaelpeyper" target="_blank">
              @michaelpeyper
            </Link>
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            <Github style={{color: "#FFFFFF"}} />
          </TableItem>
          <TableItem textAlign="left">
            <Link textFont="secondary" textColor="quartenary" href="https://github.com/mpeyper" target="_blank">
              /mpeyper
            </Link>
          </TableItem>
        </TableRow>
        <TableRow>
          <TableItem>
            <Envelope style={{color: "#118554"}} />
          </TableItem>
          <TableItem textAlign="left">
            <Link textFont="secondary" textColor="quartenary" href="mailto:mpeyper7@gmail.com" target="_blank">
              michael.peyper@ioof.com.au
            </Link>
          </TableItem>
        </TableRow>
      </TableBody>
    </Table>
  </Slide>
)