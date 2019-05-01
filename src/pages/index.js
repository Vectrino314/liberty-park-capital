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
  theme
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
  AnimatedHighlight
} from 'components/Content'
// import { timeTo } from 'helpers'
import { stats, springPromo } from 'data.json'
// import Announcement from 'components/home/Announcement'
import DefineCard from '../components/home/DefineCard'
import FeaturedServices from 'components/home/FeaturedServices'
import Testimonials from 'components/home/Testimonials'
import SpringPromo from '../components/home/SpringPromo';
import GalleryModal from '../components/home/GalleryModal';

const cta = {
  chevronRight: true,
  color: 'white',
  scale: "true"
}
const CTA = styled(Button.withComponent(Link)).attrs(cta)`
  background-image: ${theme.gradient('pink.5', 'red.6')};
`
const StartCTA = styled(Button.withComponent(Link)).attrs({
  ...cta,
  fontSize: [4, 5],
  px: [4, 5]
})`
  background-image: ${theme.gradient('yellow.5', 'orange.3')};
`

const PaymentCTA = styled(Button).attrs({
  ...cta,
  fontSize: [4, 5],
  px: [4, 5]
})`
  background-image: ${theme.gradient('red.6', 'orange.3')};
`

OutlineButton.link = OutlineButton.withComponent(Link)

const promoBG = css`
  width: 100%;
  min-height: 100vh;

  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    rgb(200, 211, 50),
    rgb(400, 0, 20)
  );
`

const Promo = styled(Box.withComponent('section')).attrs({
  bg: 'teal.6',
  align: 'center',
  pt: [4, 5, 6]
})`
  ${promoBG};
`
const PromoMegaline = styled(Heading.h1).attrs({
  color: 'white',
  fontSize: [4, 8, 9],
  pb: 2
})`
  letter-spacing: -0.015em;
  line-height: 1;
  + ${Lead} {
    line-height: 1.25;
    letter-spacing: -0.005em;
  }
`
const PromoSmallCTA = styled(Button.withComponent(Link)).attrs({
  ...cta,
  bg: 'teal.6'
})``

const HeadlineIcon = styled(GlowingIcon)`
  top: ${theme.space[1]}px;
  ${theme.mediaQueries.md} {
    top: ${theme.space[2]}px;
    width: 64px;
    height: 64px;
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
// const DefineArea = styled(Container).attrs({
//   px: 2
// })`

//   // ${theme.mediaQueries.sm}{
//     display: flex;
//   // }
//   flex-wrap: wrap;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: baseline;

// `

/*
const Megaline = styled(Heading.h1).attrs({
  fontSize: [6, 7, 8],
  mx: 'auto'
})`
  line-height: 1.125;
  color: ${theme.colors.success};
  @supports (-webkit-background-clip: text) {
    background-image: linear-gradient(
      to bottom right,
      ${theme.colors.cyan[5]} 25%,
      ${theme.colors.teal[5]} 50%,
      ${theme.colors.green[5]}
    );
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${theme.mediaQueries.md} {
    line-height: 1;
  }
`
*/

// const Stats = styled(Flex.withComponent('ul')).attrs({
//   align: 'center',
//   justify: 'center',
//   wrap: true
// })`
//   line-height: 1;
//   list-style: none;
//   padding: 0;
//   text-transform: lowercase;
// `


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
  color: 'white'
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
  mb: -2
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

const title = 'Ardorem Technologies'
const description =
  'Get your business up and running.'

export default () => (
  <Layout>
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:title', content: title },
        { name: 'description', content: description },
        { name: 'twitter:description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: 'https://ardorem.tech/' }
      ]}>

      <meta
        name="google-site-verification"
        content="3xGXMbJ90-8ZjOGo6yoDSBaII5FtidqzCFVnIm3w3kk"
      />
    </Helmet>
    <Nav color="black" />
    <Promo>
      <Container maxWidth={72} px={3} py={[5, 6]}>
        {/* <Announcement /> */}
        <PromoMegaline mt={4} pb={1}>
          Amp up your business. Give&nbsp;customers something to see.
        </PromoMegaline>
        <Lead
          fontSize={[3, 4, 5]}
          color="white"
          maxWidth={42}
          mt={[3, 4]}
          mb={[4, 5]}
        >
          Need a <strong>website</strong> or an <strong>app</strong>? Browse
          through our products.
          {/* <strong>
            {/* Browse &nbsp;admissions—open for {timeTo(springPromo.deadline)}
          </strong> */}
        </Lead>

        {/* <OutlineButton.link bg="teal.1" to="/community" m={[1, 2]}>
            Join the community
          </OutlineButton.link> */}
        <StartCTA to="/#get-started" m={[1, 2]}>
          Get Started Now
        </StartCTA>
        {/* <PaymentCTA m={[1, 2]}> */}
        <GalleryModal m={[1, 2]} bold fontSize={[4, 5]} chevronRight='true' px={[4, 5]} scale='true' />
        {/* </PaymentCTA> */}
      </Container>
    </Promo>

    {/* 
    <Box py={[5, 6, 7]}>
      <Container px={3} maxWidth={96}>
        <ColoredHeadline
          fontSize={[6, 7, 8]}
          colors={['orange.5', 'yellow.5', 'red.5']}
        >
          You were thinking it.
        </ColoredHeadline>
        
      </Container>
    </Box> */}
    <div id="get-started" />
    <Base pt={[1, 6, 7]} color="snow">
      <Container px={3} maxWidth={96}>
        <BoxHidden>
          <ColoredHeadline
            fontSize={[4, 7, 8]}
            colors={['orange.5', 'yellow.5', 'red.5']}
          >
            You were thinking it.
          </ColoredHeadline>
        </BoxHidden>

        <Features mt={[1, 4, 5]} mb={[null, null, null]}>
          <Box>
            <DefineCard />
          </Box>
          <Box>
            <Featline>What we do?</Featline>
            <h2 id="#services" />
            <Lead fontSize={[3, 4]} color="muted" maxWidth={48} mx={0}>
              Are you a small business needing a website?
              <br />
              Are you in need of scheduling for your business?
              <br />
              Are you in need of a mobile app for your business?
              <br />
              Are you in need of a tiered membership services?
              <br />
              <br />
              Do you want to worry about this or should we?
              <br />
              <br />
              We provide everything you need to make your business bright.
              <br />
              Ongoing support so you can focus on your business.
            </Lead>
          </Box>
        </Features>
      </Container>
    </Base>

    <div id="services" />
    <FeaturedServices />

    {/* <Box bg="white" color="black" align="center" py={[5, 6, 7]}>
      <Container px={3}>
        <Flex align="center" justify="center" wrap>
          <Stat value={stats.school_count} label="websites" color="teal.6" />
          <Stat value={stats.state_count} label="businesses" color="cyan.6" />
          <Stat value={stats.country_count} label="states" color="blue.6" />
        </Flex>
        <Text fontSize={4} my={4} mx="auto" maxWidth={48}>
          <strong>
            We’re high schoolers running weekly afterschool coding clubs.
          </strong>{' '}
          For&nbsp;2 weeks, we’re running an exclusive campaign to help next-gen{' '}
          <AnimatedHighlight>
            leaders start their clubs before the year ends
          </AnimatedHighlight>
          . With a spring pilot, you’ll start off great next fall with runway
          experience & members.
        </Text>
        <PromoSmallCTA bg="teal.7" to="/start" chevronRight>
          Start your club
        </PromoSmallCTA>
        <Text fontSize={[1, 2]} color="slate" mt={2}>
          Start a club, or bring yours—existing clubs are welcome too!
        </Text>
      </Container>
    </Box> */}

    <Box bg="snow" color="black" py={[5, 6, 7]}>
      <Container px={3}>
        <Flex align="center" justify="center" wrap mb={[4, 6, 7]}>
          <Stat value={stats.school_count} label="websites" color="teal.6" />
          <Stat value={stats.state_count} label="businesses" color="cyan.6" />
          <Stat value={stats.country_count} label="states" color="blue.6" />
        </Flex>
        <SpringPromo />
        <ColoredHeadline
          fontSize={[6, 7, 8]}
          colors={['orange.5', 'yellow.5', 'red.5']}
        >

          Simple. Fast. Effective
          <HeadlineIcon
            glyph="bolt"
            color="orange.5"
            aria-label="bolt icon"
            size={36}
            ml={2}
            mt={-4}
          />
        </ColoredHeadline>
        <Text fontSize={4} mt={0} mb={3} style={{ maxWidth: '48rem' }}>
          Every business has or should have a website in this day and age in
          order to compete within their niche groups.
        </Text>
        <Text fontSize={4} mb={4} style={{ maxWidth: '48rem' }}>
          Contact us to schedule consulting and see what's best for your
          business. We'll get you settled for what you need and once you're
          ready to make the next move we'll still be here.
        </Text>
        <CTA to="/#contact">Contact Us</CTA>
        <Features mt={[4, 5]}>
          <Box>
            <CommunityLine />
            <Featline mt={5}>Business websites that load fast!</Featline>
            <Lead color="slate">
              Don't sacrifice performance for style. We design every one of our
              websites to load quickly and showcase the best your business has
              to offer.
            </Lead>
          </Box>
          <Box>
            <CommunityLine />
            <Featline mt={5}>Increase product sales!</Featline>
            <Lead color="slate">
              Improve product sales and client acquisition by increasing
              peoples' recognition of your already-reputable business. Launching
              your business' website is the best, first step, to helping others
              find the products and services you provide.
            </Lead>
          </Box>
          {/* <Photo
            src="/photos/dena_cover.jpg"
            alt="A Hack Club meeting near Toronto, Canada"
          />
          <Photo
            src="/photos/hackpenn_crew.jpg"
            alt="Organizers of PA’s largest high school hackathon met in our Slack"
          /> */}
        </Features>
      </Container>
    </Box>
    <Box bg="white" color="black" py={[5, 6, 7]}>
      <Container px={3}>
        <ColoredHeadline
          fontSize={[6, 7, 8]}
          colors={['red.5', 'yellow.5', 'orange.5']}
        >
          We want people to get to know you and see you everywhere.
        </ColoredHeadline>
        <Text fontSize={4} mb={4} style={{ maxWidth: '48rem' }}>
          Help us help you by taking care of all the technical magic that goes
          into getting your website up and on places like Google, Bing, and
          Yelp. We specialize in making you look good so that you can focus on
          doing what it is you do that your customers know and love.
          {/* <A
            target="_blank"
            href="https://medium.com/hackclub/how-to-start-a-computer-science-club-at-your-high-school-ff32264f225a"
          >
            running coding clubs
          </A>{' '}
          and hackathons. We run seasonal <A href="/challenge">Challenges</A>,
          themed coding competitions with cash prizes. We’re deeply committed to
          improving the world of high&nbsp;school hacking. */}
        </Text>
        <Features mt={[4, 5, 6]}>
          <Box>
            <ResourcesLine />
            <Subhline mt={5}>Google Reviews, Bing, and Yelp</Subhline>
            <Text color="slate" fontSize={4}>
              As important as a website is, your business reviews on pages such
              as Google reviews, Bing and Yelp are critical to shining a
              positive light on your establishment. We'll get your business
              registered with market-leading search engines consoles and help
              you maintain a positive reputation.
            </Text>
          </Box>
          <Box>
            <ResourcesLine />
            <Subhline mt={5}>
              Website and Mobile Apps
              <br />
              We can help.
              {/* <SubhlineIcon
                glyph="bank-circle"
                color="red.5"
                aria-label="hack club bank icon"
                size={32}
                ml={2}
                mt={-2}
              /> */}
            </Subhline>
            <Text color="slate" fontSize={4}>
              Growing demand for more presentable and better performing websites
              has led developers to bridge the gap between websites and mobile
              applications; with progressive web applications your clients can
              enjoy the best experience accessing your site on or offline.
            </Text>
          </Box>
        </Features>
        {/* <MegaQuote mt={6}>
          <GlowingIcon glyph="quote" size={24} />
          <Text fontSize={[5, 6]} mt={[null, 5]} bold>
            Before I started Hack Club in sophomore year, I didn’t believe in
            myself. I didn’t think I could do big things.
          </Text>
          <Flex align="center" mt={[4, 5]}>
            <Avatar src="/hackers/megan.png" size={48} mr={3} />
            <Box align="left" fontSize={3}>
              <Text.span bold>Megan Cui</Text.span>, Cincinnati, OH
              <br />
              <Text fontSize={2} color="smoke">
                (@megan on Slack)
              </Text>
            </Box>
          </Flex>
        </MegaQuote> */}
      </Container>
    </Box>
    {/* <div id="testimonials" /> */}
    {/* <Testimonials /> */}
    <div id="contact" />
    <Footer />
  </Layout>
)
