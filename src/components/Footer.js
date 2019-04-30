import React from 'react'
import styled, { css } from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link as A,
  Text,
  hexa,
  theme,
} from '@hackclub/design-system'
import { Link } from 'gatsby'
import PureImagination from 'components/PureImagination'

const Base = styled(Box.withComponent('footer'))`
  background: ${props =>
    props.dark
      ? `${theme.colors.darker} radial-gradient(${hexa(
          theme.colors.black,
          0.5
        )} 1px, transparent 1px)`
      : `${theme.colors.snow} url('/pattern.svg') repeat`};
  ${props =>
    props.dark &&
    css`
      background-size: ${theme.space[4]}px ${theme.space[4]}px;
      h2 {
        color: ${theme.colors.gray[4]};
      }
      ${BottomLine} {
        border-color: ${theme.colors.black};
      }
    `} @media print {
    display: none;
  }
`

const Columns = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${theme.space[2]}px;
  ${theme.mediaQueries.md} {
    grid-gap: 50vw;
    // grid-gap: ${theme.space[4]}px;
    grid-template-columns: repeat(4, 1fr);
  }
`

const Services = styled(Flex)`
  a {
    line-height: 0;
  }
  svg {
    fill: currentColor;
    width: 32px;
    height: 32px;
  }
  ${theme.mediaQueries.md} {
    max-width: 12rem;
  }
`
Services.defaultProps = {
  align: 'center',
  mb: 3,
  wrap: true,
}

const Service = ({ href, icon, ...props }) => (
  <A
    target="_blank"
    rel="noopener"
    href={href}
    mr={2}
    mb={2}
    color="muted"
    aria-label={`hack club on ${icon}`}
    children={<Icon glyph={icon} />}
    {...props}
  />
)

const Pages = styled(Box)`
  a {
    display: block;
    color: inherit;
    margin-bottom: ${theme.space[2]}px;
  }
`

const BottomLine = styled(Box)`
  border-top: 1px solid ${theme.colors.smoke};
`

const Footer = ({ dark = false, children, ...props }) => (
  <Base
    color={dark ? 'muted' : 'slate'}
    py={[4, 5, 6]}
    dark={dark}
    align="left"
    {...props}
  >
    {children}

    <Flex wrap align="center" justify="space-around">
    <Box fontSize={2}>
        <Text>Office: 3103 BEE CAVES RD, Suite 100, Austin, TX 78746</Text>
        <Text>Mail: 3103 BEE CAVES RD, Suite 100, Austin, TX 78746</Text>
      </Box>
      <Box>
      <Text my={2}>
          <a href="tel:1-915-204-0674">1-915-204-0674</a>
          <br />
          <Text.span color="muted" children="(call toll-free)" />
          <br />
          
        </Text>
      </Box>
    </Flex>

    <Container px={3} mt={[3, 4]}>
      <BottomLine mt={3}>
        <Text fontSize={1} mt={2} color="muted">
          © {new Date().getFullYear()} Website by {' '}
          <a href="https://ardorem.tech"
          target="_blank"
          rel="noopener noreferrer"
          >
          Victor Solis
          </a>
        </Text>
      </BottomLine>
    </Container>
  </Base>
)

export default Footer
