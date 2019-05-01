import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Heading,
  Flex,
  Icon,
  Text,
  theme
} from '@hackclub/design-system'
import { Headline, Lead, Featline, ColoredHeadline } from 'components/Content'
import DefineCard from './DefineCard'
import { MdWeb } from 'react-icons/md'
import { FaCcStripe } from 'react-icons/fa'
import {
  IoIosEye,
  IoMdBusiness,
  IoIosRestaurant,
  IoIosPhonePortrait,
  IoMdArrowRoundForward
} from 'react-icons/io'
import {DiWordpress} from 'react-icons/di'
import Button from '@hackclub/design-system/dist/Button'
import GalleryModal from  'components/home/GalleryModal'

const Base = styled(Box.section).attrs({ bg: 'dark', color: 'gray.3' })``

const Modules = styled(Container)`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${theme.space[5]}px ${theme.space[4]}px;
    > div:first-child {
      grid-column: span 3;
    }
  }
`
Modules.defaultProps = {
  px: 3,
  mt: [4, null, 3],
  mb: 3,
  mx: 'auto',
  maxWidth: 72
}

const ShadowBox = styled(Box)`
  &:hover {
    border-radius: ${theme.radii[2]};
    transform: scale(1.05);
    box-shadow: ${theme.boxShadows[3]}, 0 16px 48px rgba(200, 0, 0, 0.5);
  }
`

const Module = ({ icon, name, body, ...props }) => (
  <Flex align="start" {...props}>
    <Icon
      size={48}
      mr={3}
      glyph={icon}
      color="primary"
      style={{ flexShrink: 0 }}
    />
    <Box>
      <Heading.h3 color="snow" fontSize={3} mb={1} children={name} />
      <Text
        color="muted"
        fontSize={2}
        style={{ lineHeight: '1.375' }}
        children={body}
      />
    </Box>
  </Flex>
)

const ReactModule = ({ icon, name, body, ...props }) => (
  <Flex align="start" {...props}>
    <Box
      size={48}
      color="primary"
      mr={3}
      //color="primary"
      style={{ flexShrink: 0 }}
    >
      {RenderIcon(icon, 48)}
    </Box>
    <Box>
      <Heading.h3 color="snow" fontSize={3} mb={1} children={name} />

      <Text
        color="muted"
        fontSize={2}
        style={{ lineHeight: '1.375' }}
        children={body}
      />
    </Box>
  </Flex>
)

const ModuleDetails = styled(Box).attrs({
  bg: '#252429',
  color: 'smoke',
  mt: 2,
  ml: 3,
  py: 3,
  px: 2
})`
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.0625);
  border-radius: ${theme.radii[2]};
  ul {
    padding: 0;
    list-style: none;
  }
  li + li {
    margin-top: ${theme.space[2]}px;
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

const ModuleDetailsDocument = styled(Flex.withComponent('li'))``

const Document = ({ icon, name, cost }) => (
  <ModuleDetailsDocument align={cost ? 'start' : 'center'}>
    <Icon
      size={28}
      mr={1}
      glyph={icon}
      color="success"
      style={{ flexShrink: 0 }}
    />
    <Box>
      <Text fontSize={2} children={name} />
      {cost && (
        <Text
          fontSize={1}
          color="muted"
          style={{ lineHeight: '1.375' }}
          children={cost}
        />
      )}
    </Box>
  </ModuleDetailsDocument>
)

const RenderIcon = (icon, size) => {
  switch (icon) {
    case 'eye':
      return <IoIosEye size={size} style={{ flexShrink: 0 }} />
    case 'stripe':
      return <FaCcStripe size={size} style={{ flexShrink: 0 }} />
    case 'web':
      return <MdWeb size={size} style={{ flexShrink: 0 }} />
    case 'business':
      return <IoMdBusiness size={size} style={{ flexShrink: 0 }} />
    case 'restaurant':
      return <IoIosRestaurant size={size} style={{ flexShrink: 0 }} />
    case 'responsive':
      return <IoIosPhonePortrait size={size} style={{ flexShrink: 0 }} />
    case 'right-arrow':
      return <IoMdArrowRoundForward size={size} style={{ flexShrink: 0 }} />
    case 'wordpress':
      return <DiWordpress size={size} style={{ flexShrink: 0 }} />
  }
}

const ReactDocument = ({ icon, name, cost }) => (
  <ModuleDetailsDocument align={cost ? 'start' : 'center'}>
    {icon ? (
      <Box
        size={28}
        color="primary"
        mr={1}
        color="success"
        style={{ flexShrink: 0 }}
      >
        {RenderIcon(icon, 28)}
      </Box>
    ) : (
      <Box />
    )}
    <Box>
      {cost ? (
        <Text fontSize={2} children={name} style={{ align: 'start' }} />
      ) : (
        <Text fontSize={2} children={name} ml={1} />
      )}
      {cost && (
        <Text
          fontSize={1}
          color="muted"
          style={{ lineHeight: '1.375' }}
          children={cost}
        />
      )}
    </Box>
  </ModuleDetailsDocument>
)

const Laptop = styled.div`
  width: 100%;
  height: 100%;
  background-size: auto 115%;
  background-image: url('/bank/mac.png');
  background-position: center top;
  background-repeat: no-repeat;
  ${theme.mediaQueries.md} {
    grid-row: span 2;
    grid-column: span 2;
  }
`

// const BoxHidden = styled(Box)`
//   display: none;
//   ${theme.mediaQueries.md} {
//     display: block;
//   }
// `

export default () => (
  <Base pt={[6, 3, 7]} pb={[4, 5, 6]} color="snow">
    {/* <Box>
      <Container px={3} maxWidth={96}>
        <BoxHidden>
          <ColoredHeadline
            fontSize={[4, 7, 8]}
            colors={['orange.5', 'yellow.5', 'red.5']}
          >
            You were thinking it.
          </ColoredHeadline>
        </BoxHidden>

        <Features mt={[1, 4, 5]} mb={[1, null, null]}>
          <Box>
            <DefineCard />
          </Box>
          <Box>
            <Featline>What we do?</Featline>
            <h2 id="#services"></h2>
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
    </Box> */}

    <Modules px={3}>
      <Box align="center">
        <Headline>We're eager to hear about your needs.</Headline>
      </Box>

      <Box px={3} 
      // py={1}
      >
        <ReactModule
          icon="web"
          name="Website Development"
          body="Increase your lead generation and conversion."
        />
        <ModuleDetails>
          <ReactDocument
            icon="responsive"
            name="Responsive"
            cost="Optimized for mobile, tablet, and desktop users."
          />
          <Document
            icon="bolt"
            name="Blazing Performance"
            cost="Tailored for all connection speeds with benchmarks to prove it."
          />
          <Box pt={1} align="center" style={{ width: '100%' }}>
          {/* <Button>Demo Sites</Button> */}
          <GalleryModal />
        </Box>
        </ModuleDetails>
        
      </Box>

      <Box>
        <Module
          icon="analytics"
          name="SEO Marketing"
          body="Get noticed on Google and everywhere else. We take care of that."
        />
        <ModuleDetails>
          <Document
            icon="google"
            name="Google Console"
            cost="Make it known that you are an active business and get positive feedback"
          />
          <Document
            name="Search Engines"
            cost="We will take care of all the grit that makes you look good against the competition"
          />
        </ModuleDetails>
      </Box>

      <Box>
        <Module
          icon="card"
          name="Online Payments"
          body="Pay your balance easily through our online payment portal."
        />
        <ModuleDetails>
          <ReactDocument
            icon="stripe"
            name="Stripe Portal"
            cost="We use Stripe to simplify billing and make it easier for you to manage your payments."
          />
          <ReactDocument
            icon="eye"
            name="Transparency"
            cost="See what it is you are paying for."
          />
          {/* <Document
            name="Features"
            cost="Edit card info, downlaod invoices, everything is at your fingertips."
          /> */}
        </ModuleDetails>
      </Box>
      <Module
        icon="analytics"
        name="Balance + History"
        body="Check real-time account balance + transaction history online anytime."
      />
      <Module
        icon="payment"
        name="Built-in Invoicing"
        body="Check or download invoices stright from the payment portal."
      />
      <Module
        icon="docs"
        name="E-Commerce"
        body="Need a webstore to sell your products/merch. We'll handle it so you can keep can keep brainstorming."
      />
      <ReactModule
        icon="wordpress"
        name="Wordpress"
        body="Need someone to maintian your wordpress site or need all the fixings. We'll take care of you."
      />
      <Module
        icon="google"
        name="G Suite"
        body="Get free G Suite + email addresses (like john@businessname.com) when you get a website with us."
      />
      <Module
        icon="support"
        name="Support anytime"
        body="Questions? We’ll never leave you in the dark. Best-effort 12hr response time."
      />
    </Modules>
  </Base>
)
