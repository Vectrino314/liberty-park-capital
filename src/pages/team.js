import React from 'react'
import styled from 'styled-components'
import {
  Section,
  Heading,
  Text,
  Container,
  theme
} from '@hackclub/design-system'
import Helmet from 'react-helmet'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Name from 'components/Name'
import Bio from 'components/Bio'
import Footer from 'components/Footer'

const Header = styled(Section)`
  background:
    linear-gradient(-64deg, ${theme.colors.orange[5]}, ${theme.colors.red[5]});
  background-repeat: repeat;
`

const Base = styled(Container)`
  display: grid;
  grid-gap: 1rem;
  ${theme.mediaQueries.md} {
    grid-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`

const title = 'Ardorem Team'
const description =
  'Meet the team that makes your business look and feel like a rockstar.'

export default () => (
  <Layout bg="snow">
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:title', content: title },
        { name: 'description', content: description },
        { name: 'twitter:description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: 'https://ardorem.tech/team' }
      ]}
    />

    {/* Make it so that when the page is set to true it changes the nav to suite that page */}
    <Nav team/>
    <Header color="white">
      <Container maxWidth={36} align="center" py={[3, 4]}>
        <Heading.h1 fontSize={[3, 4]} regular caps mt={6} mb={2}>
          Ardorem Team
        </Heading.h1>
        <Name fontSize={6}>We're the Innovators.</Name>
        <Text fontSize={3} my={3}>
          We believe in a world taken over by IoT and where every business should have a voice.
        </Text>
      </Container>
    </Header>
    <Base px={3} py={[4, 5]}>
      <Bio
        //img="/team/zach.jpg"
        name="Victor Solis"
        teamRole="CEO, Web/Design"
        //text="Teaching himself how to program mobile apps and graduating Texas Tech with a bachelors in Computer Engineering..."
        //pronouns="he/him"
      />
      <Bio
        //img="/team/max.jpg"
        name="Carlos Delgado"
        teamRole="Marketing"
        //text="Dropping out of College, Carlos took the reigns and opened a digital media business in Salt Lake City, Utah. Working as the lead marketer and web designer."
        //pronouns="he/him"
      />
      {/* <Bio
        img="/team/lachlan.jpg"
        name="Lachlan Campbell"
        teamRole="Web/Design"
        text="Lachlan, an active club leader from State College, PA, joined to work on hackclub.com. 1.5 years later, they make Hack Club’s website, design (system), & branding, and work on projects including Bank & Leaders. They will soon study Interactive Media Arts @ NYU, fall 2019."
        pronouns="they/them"
      />
      <Bio
        img="/team/mingjie.jpg"
        name="Mingjie Jiang"
        teamRole="Community"
        text="Mingjie is a club leader from Rockville, Maryland. He started working with Hack Club in July 2017, currently working with community engagement and public identity of the organization. He also ran various programs like Hack Chicago & CodeDay DC to spread his passion for technology to fellow students."
        pronouns="he/him"
      />
      <Bio
        img="/team/chris.jpg"
        name="Chris Walker"
        teamRole="Hacker Resources"
        text="Chris started programming games in middle school, and eventually left college to make educational software. In 2013 he accepted a Thiel Fellowship and moved to San Francisco, where he watched Hack Club grow from an early stage. He now works full-time on Hack Club’s learning resources."
        pronouns="he/him"
      />
      <Bio
        img="/team/athul.jpg"
        name="Athul Blesson"
        teamRole="Indian Region"
        text="Athul leads some of the largest Hack Clubs in India. After graduating from high school, he joined as the Regional Manager in India, where he actively leads 30+ clubs."
        pronouns="he/him"
      />
      <Bio
        img="/team/michael.png"
        name="Michael Destefanis"
        teamRole="Hack Club Bank"
        text="After graduating high school, Michael moved to California where he began working with Hack Club. He now leads Hack Club Bank and loves helping passionate people bring their ideas to reality."
        pronouns="he/him"
      />
      <Bio
        img="/team/orpheus.jpg"
        name="Prophet Orpheus"
        teamRole="Mascot"
        text="Prophet Orpheus is Hack Club’s mascot who takes the form of a nondescript dinosaur. She is always working to help more students to learn to code, and has always been the most active contributor of Hack Club."
        pronouns="she/her"
      /> */}
    </Base>
    <Footer />
  </Layout>
)
