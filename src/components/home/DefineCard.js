import React from 'react'
import styled from 'styled-components'
import { Icon, Text, Heading, Link as A, theme } from '@hackclub/design-system'
import { Link } from 'gatsby'
import Sheet from 'components/Sheet'
import { Lead, Subhline } from 'components/Content'

const Announcement = styled(Sheet).attrs({
  maxWidth: 36,
  p: 4,
  //mt: [null, -3, -4, -5],
  mb: [3, 4, 5],
  bg: 'white',
  color: 'gray.9'
})`
  ${theme.mediaQueries.sm} {
    display: flex;
  }
  display: none;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  min-width: 32rem;
  max-width: 48rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
  p {
    text-shadow: none;
  }
  span {
    display: none;
    ${theme.mediaQueries.sm} {
      display: inline;
    }
  }
`

const DefinedItem = styled(Heading.h1).attrs({
  color: 'black',
  fontSize: [4, 8, 9],
  pb: 2
})`
  align-self: flex-start;
  letter-spacing: -0.015em;
  line-height: 1;
  + ${Lead} {
    line-height: 1.25;
    letter-spacing: -0.005em;
  }
`

const Pronounciation = styled(Subhline).attrs({
  color: 'grey',
  fontSize: [1, 2, 3],
  pb: 2,
  ml: [2, 3, 6]
})`
  align-self: flex-start;
  letter-spacing: -0.015em;
  line-height: 1;
  + ${Lead} {
    line-height: 1.25;
    letter-spacing: -0.005em;
  }
`

const Type = styled(Lead).attrs({
  color: 'grey',
  fontSize: [1, 2, 2],
  ml: [1, 2, 4]
})`
  align-self: flex-start;
  letter-spacing: -0.015em;
  line-height: 1;
`

const TypeDetails = styled(Lead).attrs({
  color: 'black',
  // fontSize: [1,2,3],
  pb: [null, null, 2, 2],
  ml: [2, 3, 6]
})`
  align-self: flex-start;
  letter-spacing: -0.015em;
  line-height: 1;
`

Announcement.Link = styled(A.withComponent(Link)).attrs({
  caps: true,
  color: 'info',
  bold: true,
  fontSize: 2,
  ml: 'auto',
  chevronRight: true
})``

export default () => (
  <Announcement>
    <DefinedItem pb={1}>
      <Icon size={64} glyph="quote" mt={2} />
      ardorem
    </DefinedItem>
    <Pronounciation>Pronounciation: are - doe - rem</Pronounciation>
    <Type pb={2}>Started in 2019</Type>
    <Type>Tech Startup</Type>
    <Text ml={[2, 3, 6]} align="left">
      {' '}
      Our aim is to innovate with IoT solutions, solve unique issues, and help
      small businesses have a voice.
      <br />
    </Text>
    <Type mt={[2, 2, 3]}>Origin</Type>
    <Text ml={[2, 3, 6]} align="left">
      Started by a Texas Tech college graduate, Ardorem is a safe haven for
      innovative minds that look to improve upon existing solutions or build
      their own.
    </Text>
    <Type mt={[2, 2, 3]}>Culture</Type>
    <Text ml={[2, 3, 6]} align="left">
      {' '}
      At Ardorem, we embrace everyone and strive to deliver quality products in
      a relaxed and friendly environment. Our quality reflects our resolve to
      make sure you have the tools to make your ideas finally a part of you.
      <br />
    </Text>

    <Announcement.Link to="/flyer.pdf">Download flyer</Announcement.Link>
  </Announcement>
)
