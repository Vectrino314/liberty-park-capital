import React, { Fragment, Component } from 'react'
import { Box, Container, Heading, Link, Icon, Flex, Text, Button, theme, BackgroundImage } from '@hackclub/design-system'
import { Modal, CloseButton, Overlay } from 'components/Modal'
import kebabCase from 'lodash/kebabCase'

import styled, { css } from 'styled-components'
import Badge from '@hackclub/design-system/dist/Badge';

const websites = [
  {
    name: 'InShape360',
    location: 'Salt Lake City, UT',
    type: 'Multi-Site',
    link: 'https://inshape360.com'
  },
  {
    name: 'Leather Menders',
    location: 'Salt Lake City, UT',
    type: 'Multi-Site',
    link: 'https://leathermenders.com'
  },
  {
    name: 'Light Weight Sites',
    location: 'El Paso, TX',
    type: 'Single Page',
    link: 'https://lightweightsites.com'
  }
]

const FlexContainer = styled(Container).attrs({
  //bg: 'secondary',
  // mt: 2,
  // mb: 2
})`
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-around;
  // list-style: none;
  // align-items: flex-start;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    // width: 90vw;

    ${theme.mediaQueries.sm} {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
`
const Photo = styled(BackgroundImage)`
  min-height: 15rem;
  background-size: contain;
  background-color: transparent;
  border-radius: ${theme.radii[2]};

  ${theme.mediaQueries.sm} {
    min-height: 25rem;
    max-height: 50rem;
    &:hover {
      transform: scale(1.3);
    }
  }
`

const BoxPicture = styled(Box.withComponent(Link)).attrs({
  mt: 2,
  mb: 2,
  p: 2,
  px: [2, 3, 3]
})`
  border-radius: ${theme.radius};
  background-image: radial-gradient(
    ellipse farthest-corner at top left,
    rgb(200, 211, 50),
    rgb(400, 0, 20)
  );

  // ${theme.mediaQueries.lg} {
  //   min-width: 30vw;
  // }
  
  //height: 200px;
  //width: 90vw;
`

// Visit Badge Hover Effect
const BadgeHover = styled(Badge.withComponent(Link))`
&:hover {
  transform: scale(1.1);
}

${theme.mediaQueries.sm} {
  &:hover {
    transform: scale(1.3);
  }
}
`

const RenderType = (type) => {

  const input = kebabCase(type.toLowerCase())

  switch (input) {
    case 'multi-site':
      return (
        <Badge bg="accent">
          <Text fontSize={[1, 3, 5]} bold color="white" children={type} />
        </Badge>
      )
    case 'single-page':
      return (
        <Badge bg="success">
          <Text fontSize={[1, 3, 5]} bold color="white" children={type} />
        </Badge>
      )
    case 'kitchen':
      return (
        <Badge bg="primary">
          <Text fontSize={[1, 3, 5]} bold color="white" children={type} />
        </Badge>
      )
    case 'mobile-app':
      return (
        <Badge bg="warning">
          <Text fontSize={[1, 3, 5]} bold color="white" children={type} />
        </Badge>
      )
    case 'iot':
      return (
        <Badge bg="info">
          <Text fontSize={[1, 3, 5]} bold color="white" children={type} />
        </Badge>
      )
  }
}

// Need to style the boxes to be responsive and have the website contained nicely
const GalleryItem = ({
  img,
  name,
  location,
  type,
  link
}) => [
    <BoxPicture>
      
      <Text fontSize={[3, 3, 5]} bold color="white" children={name} />
        <Text fontSize={[3, 3, 5]} bold color="white" children={location} />
      
      <Photo contain key={img} src={img}>
        <Box
          px={[3, 4]}
          mt={[3, 4]}
          pl={[null, null, 128 + theme.space[5] + theme.space[4]]}
          key={name}
        >
        </Box>

      </Photo>
      <Box m={[2, 3, 3]}>

        {/* <Text fontSize={[3, 3, 5]} bold color="black" children={name} />
        <Text fontSize={[3, 3, 5]} bold color="black" children={location} /> */}


        <Flex justify="space-between">
          <Box>
          {RenderType(type)}
          </Box>

          <BadgeHover 
          bg="error" 
          href={link}
          target="_blank"
              rel="noopener noreferrer">
            <Text
               
       
          
               fontSize={[1, 3, 5]}
               bold
               color="white">
              
              Visit
            </Text>
            {/* <a
              href={link}
              children="Visit"
              target="_blank"
              rel="noopener noreferrer"
            /> */}
          </BadgeHover>
        </Flex>
      </Box>
    </BoxPicture>
  ]


class GalleryModal extends Component {
  state = { active: false }

  toggle = () => {
    this.setState(state => ({ active: !state.active }))
  }

  render() {
    return (
      <Fragment>
        {this.state.active && (
          <Fragment>
            <Modal w="100rem" align="left" my={4} p={[3, 4]} >
              <CloseButton onClick={this.toggle} />
              <Heading.h2 >Check Out Our Work</Heading.h2>
              {/* <Flex
                align="right"
                my={3}
                wrap
                
              > */}
              <FlexContainer>
                {/* <RenderWebsiteImage
                name="in360"
              /> */}

                {websites.map(website => {
                  const id = kebabCase(website.name.toLowerCase())
                  console.log(id)
                  return <GalleryItem {...website} img={`/gallery/${id}.jpg`} key={id} />
                })}
                {/* 
// {websites.map(website => {
//                   const id = kebabCase(website.name.toLowerCase())
//                   console.log(id)
//                   return <GalleryItem {...website} img={`/gallery/${id}`} key={id} />
//                 })} */}

              </FlexContainer>


              {/* </Flex> */}
              {/* <Flex
                align="center"
                my={3}
                py={2}
                px={3}
                bg="red.0"
                style={{ borderRadius: 4 }}
              >
                <Text color="primary" fontSize={2}>
                  Already a member?
                </Text>
                <Button
                  ml="auto"
                  fontSize={2}
                  href="https://hackclub.slack.com"
                  target="_blank"
                  chevronRight
                  children="Sign in"
                />
              </Flex>
              <SlackForm /> */}
            </Modal>
            <Overlay onClick={this.toggle} />
          </Fragment>
        )}
        <Button
          //  bg="orange.5"
          {...this.props}
          // service=""

          onClick={this.toggle}
        >
          {/* <Box mr={2} /> */}
          DEMO WEBSITES
        </Button>
      </Fragment>
    )
  }
}

export default GalleryModal
