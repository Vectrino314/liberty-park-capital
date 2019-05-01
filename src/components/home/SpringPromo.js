import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Flex,
  Text,
  Sheet,
  LargeButton,
  theme
} from '@hackclub/design-system'
import { Headline, Lead } from 'components/Content'
import { Link } from 'gatsby'
import { Fade } from 'react-reveal'

const Base = styled(Sheet).attrs({
  my: [5, 6],
  p: 0,
  color: 'white',
  align: 'center'
})`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  align-items: start;
  ${theme.mediaQueries.md} {
    grid-gap: ${theme.space[5]}px;
    grid-template-columns: 2fr 1fr;
  }
`

const section = { px: [3, 4, 5], py: [4, 5] }

const Green = styled(Box).attrs(section)`
  background-color: ${theme.colors.teal[6]};
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    rgb(26, 211, 191),
    rgb(17, 195, 109)
  );
`
const White = styled(Flex).attrs({
  ...section,
  flexDirection: 'column',
  justify: 'center',
  bg: 'white'
})`
  height: 100%;
`

const Timeline = styled(Flex).attrs({
  flexDirection: 'column'
})`
  line-height: 1.125;
  position: relative;
  &:before {
    content: '';
    background-image: linear-gradient(
      to bottom,
      ${theme.colors.white} 0%,
      ${theme.colors.smoke} 15%,
      ${theme.colors.smoke} 85%,
      ${theme.colors.white} 100%
    );
    height: 100%;
    width: 3px;
    margin-left: 4px;
    position: absolute;
  }
`
const TimelineStep = styled(Flex).attrs({
  align: 'center',
  pt: props => (props.first ? 0 : [2, 3])
})`
  line-height: 1.125;
`
const Circle = styled(Box).attrs({
  p: 1,
  bg: 'rgb(26, 211, 191)',
  color: 'white'
})`
  border-radius: ${theme.pill};
  display: inline-block;
  line-height: 0;
`

Timeline.Step = ({ name, duration, first = false }) => (
  <Fade bottom>
    <TimelineStep first={first}>
      <Circle mr={3} />
      <Box align="left">
        <Text color="muted" fontSize={0} caps children={duration} />
        <Text color="rgb(17, 195, 109)" fontSize={3} children={name} />
      </Box>
    </TimelineStep>
  </Fade>
)

LargeButton.link = LargeButton.withComponent(Link)

const SpringPromo = ({ buttonProps = {}, ...props }) => (
  <Base {...props}>
    <Green>
      <Headline maxWidth={28} mx="auto">
        How do we do things?
      </Headline>
      <Lead maxWidth={36} mx="auto" color="white" fontSize={[3, 4]} my={2}>
        Going and creating a website can be tedious and going through a third-party to make 
        you one can be a hassle. At Ardorem, we streamline our process to make sure you're our 
        top priority. With readily accessible documents and design selection as easy as multiple choice,
        you to can stand out amongst your competitors.
      </Lead>
    </Green>
    <White>
      <Timeline>
        <Timeline.Step icon="send" name="Proposal" duration="Right Now" first />
        <Timeline.Step name="Contract/Final Quote" duration="In 2 days" />
        <Timeline.Step name="Sign-Off: Design" duration="In 2 weeks" />
        <Timeline.Step name="Sign-Off: Final Design" duration="1 Month" />
        <Timeline.Step name="Finished Website" duration="1 Month" />
      </Timeline>
    </White>
  </Base>
)

export default SpringPromo
