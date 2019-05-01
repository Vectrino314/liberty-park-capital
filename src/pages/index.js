import SEO from 'components/seo'
import React from 'react'
import styled, { css } from 'styled-components'
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  LargeButton as Button,
  Link as A,
  OutlineButton,
  Text,
  Sheet,
  Card,
  theme,
} from '@hackclub/design-system'
import { Link } from 'gatsby'
import Layout from 'components/Layout'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import GlowingIcon from 'components/GlowingIcon'
import Stat from 'components/Stat'
import Photo from 'components/Photo'
import {
  ColoredHeadline,
  Subhline,
  Featline,
  Lead,
  AnimatedHighlight,
} from 'components/Content'

import BackgroundImage from '@hackclub/design-system/dist/BackgroundImage'

const cta = {
  chevronRight: true,
  color: 'white',
  scale: 'true',
}
const CTA = styled(Button.withComponent(Link)).attrs(cta)`
  background-image: ${theme.gradient('pink.5', 'red.6')};
`
const StartCTA = styled(Button.withComponent(Link)).attrs({
  ...cta,
  fontSize: [4, 5],
  px: [4, 5],
})`
  background-image: ${theme.gradient('green.5', 'green.3')};
`

const PaymentCTA = styled(Button).attrs({
  ...cta,
  fontSize: [4, 5],
  px: [4, 5],
})`
  background-image: ${theme.gradient('red.6', 'orange.3')};
`

OutlineButton.link = OutlineButton.withComponent(Link)

const promoBG = css`
  width: 100%;
  min-height: 100vh;
`

const Hero = styled(BackgroundImage.withComponent(Card)).attrs({
  //scale: true,
  boxShadow: 'xl',
  bg: '#DDDAAA',
  src: '/Liberty_Large.jpg',
  'aria-label': 'Hero Background Image',
})`
  ${promoBG};

  ${theme.mediaQueries.lg} {
    background-size: cover;
    background-position: center;
  }
`

const Promo = styled(Box.withComponent('section')).attrs({
  bg: 'blue.6',
  align: 'center',
  pt: [4, 5, 6],
})`
  ${promoBG};
`
const PromoMegaline = styled(Heading.h1).attrs({
  color: 'white',
  fontSize: [4, 8, 9],
  pb: 2,
})`
  font-family: 'Spectral', serif;
  letter-spacing: -0.015em;
  line-height: 1;
  + ${Lead} {
    line-height: 1.25;
    letter-spacing: -0.005em;
  }
`
const PromoSmallCTA = styled(Button.withComponent(Link)).attrs({
  ...cta,
  bg: 'teal.6',
})``

const HeadlineIcon = styled(GlowingIcon)`
  top: ${theme.space[1]}px;
  ${theme.mediaQueries.md} {
    top: ${theme.space[2]}px;
    width: 200px;
    height: 200px;
  }
`
const SubhlineIcon = styled(GlowingIcon)`
  top: ${theme.space[1]}px;
  ${theme.mediaQueries.md} {
    top: ${theme.space[2]}px;
    width: 48px;
    height: 48px;
  }
`
const Quote = styled(Sheet).attrs({ maxWidth: 48, bg: 'primary', fontSize: 3 })`
  border-radius: ${theme.radii[2]};
  position: relative;
  ${GlowingIcon} {
    opacity: 0.75;
    position: absolute;
    left: 0;
    top: 0;
    ${theme.mediaQueries.md} {
      width: 32px;
      height: 32px;
    }
  }
`
const MegaQuote = styled(Quote).attrs({
  px: [3, 4, 5],
  pt: 6,
  pb: [4, 5],
  color: 'white',
})`
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    ${theme.colors.pink[5]},
    ${theme.colors.fuschia[5]},
    ${theme.colors.indigo[5]}
  );
  &:before {
    color: ${theme.colors.pink[2]};
  }
  ${Text} {
    line-height: 1.125;
    ${theme.mediaQueries.md} {
      line-height: 1.25;
    }
  }
`

const BoxHidden = styled(Box)`
  display: none;
  ${theme.mediaQueries.md} {
    display: block;
  }
`

const Features = styled(Box)`
  display: grid;
  grid-gap: ${theme.space[6]}px;

  ${theme.mediaQueries.lg} {
    grid-gap: ${theme.space[6]}px;
    grid-template-columns: repeat(2, 1fr);
  }
  // ${theme.mediaQueries.sm} {
  //   grid-gap: ${theme.space[4]}px;
  //   grid-template-columns: repeat(2, 1fr);
  // }
`
const FeatureLine = styled(Box).attrs({
  bg: 'primary',
  width: 1,
  mt: 2,
  mb: -2,
})`
  border-radius: ${theme.radius};
  height: 4px;
`
const CommunityLine = styled(FeatureLine)`
  background-image: linear-gradient(
    to right,
    ${theme.colors.orange[5]},
    ${theme.colors.pink[5]},
    ${theme.colors.red[5]}
  );
`
const ResourcesLine = styled(FeatureLine)`
  background-image: linear-gradient(
    to right,
    ${theme.colors.fuschia[5]},
    ${theme.colors.violet[5]},
    ${theme.colors.blue[5]}
  );
`

const Base = styled(Box.section).attrs({ bg: 'dark', color: 'gray.3' })``

const IndexPage = () => (
  <Layout>
    <SEO title="Liberty" description="Demo site for Liberty Park Capital" keywords={[`gatsby`, `application`, `react`]} />

    <Nav bg="#AAAAAA" color="black" />

    <Hero>
      <Container maxWidth={72} px={3} py={[5, 6]}>
        <Flex align="center" justify="center" flexDirection="column">
          <PromoMegaline
            color="white"
            fontSize={[3, 3, 8]}
            mt={[6, 4, 6]}
            pb={1}
          >
            LIBERTY PARK CAPITAL
          </PromoMegaline>
          
          {/* <Announcement /> */}
        </Flex>
      </Container>
      <Container maxWidth={72} px={3}>
        <Flex align="center" justify="space-around" wrap>
          {/* <Card bg="white">
            <Login />
          </Card>
          <Text bold fontSize={[3, 4, 5]}
            color="#01FF70"
            maxWidth={42}

          // mt={[3, 4]}
          // mb={[4, 5]}
          >
            Need a <strong>website</strong> or an <strong>app</strong>? Browse
            through our products.
          </Text> */}
          
      <StartCTA to="/upload">Upload Demo</StartCTA>
        </Flex>
      </Container>
      
    </Hero>

    <Promo>
      <Container maxWidth={72} px={3} py={[5, 6]}>
        <Flex align="center" justify="center">
          <HeadlineIcon
            glyph="bank-circle"
            color="green.6"
            aria-label="bolt icon"
            size={72}
            mr={2}
          />
          <Box>
            <PromoMegaline fontize={[2, 1, 1]} pb={1}>
              Monthly Reports
            </PromoMegaline>
            <Lead fontSize={[3, 4, 5]} color="white">
              Get monthly reports and see how your capital is doing.
            </Lead>
            <StartCTA mt={[2, 3, 3]}>Monthly Reports</StartCTA>
          </Box>
        </Flex>
      </Container>
      <Container maxWidth={72} px={3} py={[5, 6]}>
        <Flex align="center" justify="center">
          <Box>
            <PromoMegaline fontize={[2, 1, 1]} pb={1}>
              Investor Letters
            </PromoMegaline>
            <Lead fontSize={[3, 4, 5]} color="white">
              Access to Investor Letters.
            </Lead>
            <StartCTA mt={[2, 3, 3]}>Investor Letters</StartCTA>
          </Box>
          <HeadlineIcon
            glyph="docs"
            color="green.6"
            aria-label="doc icon"
            size={72}
          />
        </Flex>
      </Container>

      <Container maxWidth={72} px={3} py={[5, 6]}>
        <Flex align="center" justify="center">
          <HeadlineIcon
            glyph="slack-old"
            color="green.6"
            aria-label="bank icon"
            size={72}
            ml={2}
          />
          <Box>
            <PromoMegaline fontize={[2, 1, 1]} pb={1}>
              TearSheets
            </PromoMegaline>
            <Lead fontSize={[3, 4, 5]} color="white">
              Access to tearsheet.
            </Lead>
            <StartCTA mt={[2, 3, 3]}>Tearsheet</StartCTA>
          </Box>
        </Flex>
      </Container>
      <Container maxWidth={72} px={3} py={[5, 6]}>
        <Flex align="center" justify="center">
          <Box>
            <PromoMegaline fontize={[2, 1, 1]} pb={1}>
              PitchBook
            </PromoMegaline>
            <Lead fontSize={[3, 4, 5]} color="white">
              Access to PitchBook.
            </Lead>
            <StartCTA mt={[2, 3, 3]}>PitchBook</StartCTA>
          </Box>
          <HeadlineIcon
            glyph="payment-docs"
            color="green.6"
            aria-label="bolt icon"
            size={72}
          />
        </Flex>
      </Container>
    </Promo>
    <Footer />
  </Layout>
)

export default IndexPage
