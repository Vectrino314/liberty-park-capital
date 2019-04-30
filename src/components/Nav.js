import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  Text,
  Box,
  Container,
  Flex,
  Icon,
  cx,
  theme,
  OutlineButton,
} from '@hackclub/design-system'
// import { Text } from 'components/Content';
import Flag from 'components/Flag'
import { Link } from 'gatsby'
import ScrollLock from 'react-scrolllock'
import GalleryModal from './home/GalleryModal'

const rgbaBgColor = (props, opacity) =>
  `rgba(
    ${props.bgColor[0]},
    ${props.bgColor[1]},
    ${props.bgColor[2]},
    ${opacity}
  )`

const Root = styled(Box.withComponent('header'))`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
  ${props =>
    (props.scrolled || props.toggled || props.fixed) &&
    css`
      position: fixed;
      // transition-delay: 2s;
      // transition: all 1s ease-in-out;
      background-color: ${rgbaBgColor(props, 0.96875)};
      border-bottom: 1px solid rgba(48, 48, 48, 0.125);
      @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        background-color: ${props.transparent
          ? 'transparent'
          : rgbaBgColor(props, 0.75)};
        ${props.dark
          ? css`
              -webkit-backdrop-filter: saturate(90%) blur(20px);
            `
          : css`
              -webkit-backdrop-filter: saturate(180%) blur(20px);
            `};
      }
      ${theme.mediaQueries.reduceTransparency} {
        -webkit-backdrop-filter: auto !important;
      }
      ${theme.mediaQueries.lg} {
        min-height: 10vh;
      }
    `} @media print {
    display: none;
  }
`

const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  width: 100vw;
  // transition: all 1s ease-in-out;

  ${theme.mediaQueries.lg} {
    margin-top: 50px;
  }

  ${theme.mediaQueries.md} {
    // padding: 0 0 0 ${theme.space[4]}px;
    max-height: 15vw;
  }
`

const hoverColor = name =>
  ({
    white: 'smoke',
    smoke: 'muted',
    muted: 'slate',
    slate: 'black',
    black: 'slate',
    primary: 'error',
  }[name] || 'black')

const MobileFlag = styled(Flag)`
  display: block;
  ${theme.mediaQueries.lg} {
      display: none;
  }
  ${theme}
`

const ResponsiveFlag = styled(Flag)`
  display: none;
  ${theme.mediaQueries.lg} {
      display: block;
  }
  ${props => (props.scrolled) ?
    null :
  css`
  transform: scale(1.5);
`
}
`

const NavBar = styled(Box.withComponent('nav'))`
  display: none;
  width: 100vw;
  ${theme.mediaQueries.lg} {
    width: calc(100vw - 10%);
  }
  ${theme.mediaQueries.xl} {
    width: calc(100vw - 50%);
  }
  a {
    color: ${props => cx(props.color)};
    // margin: ${theme.space[2]}px;
    // padding: ${theme.space[2]}px;
    padding: 0;
    margin: auto;
    text-decoration: none;
  }
  ${props =>
    props.isMobile
      ? css`
          display: ${props.toggled ? 'flex' : 'none'};
          flex-direction: column;
          // overflow-y: auto;
          text-align: left;
          padding: 0;
          // height: 100vh;
          a {
            padding: 0;
            margin: 0 auto;
            height: 64px;
            line-height: 64px;
            font-weight: bold;
            width: 100%;
            max-width: 18rem;
            &:not(:last-child) {
              border-bottom: 1px solid rgba(48, 48, 48, 0.125);
            }
            @media screen and (max-width: 22em) {
              max-width: 16rem;
            }
          }
        `
      : // Fix this for wierd mobile nav transition
        css`
          
          @media (min-width: 56em) {
            display: flex;
            // justify-content: spaced-between;
            // align-items: flex-end;
            position: absolute;
            // top: -130%;
            left: 50%;
            transform: translateX(-50%);
          }
          a {
            font-size: ${theme.fontSizes[1]}px;
            text-transform: uppercase;
            &:hover {
              color: ${theme.cx(hoverColor(props.color))};
            }
          }
        `};
`

const ClientButton = styled(OutlineButton)`
  width: 15vw;
  margin: 10px;
  ${theme.mediaQueries.lg}{
    margin: 10px;
  }
`

const Navigation = props => (
  <NavBar role="navigation" {...props}>
    
    <Link to="/#services" children="Team" />
    <Link to="/#testimonials" children="News & Updates" />
    <ResponsiveFlag scrolled={props.scrolled} />
    {/* <Link to="/#gallery" children="Gallery" /> */}
    <Link to="/#contact" children="Firm Overview" />
    <Link to="/#contact" children="Contact" />

    {/* <Link to="/workshops/" children="Workshops" /> */}
    {/* <a
      href="localhost:8000/#services"
      children="Services"
      target="_blank"
      rel="noopener noreferrer"
    /> */}
    {/* <Link to="/bank/" children="Bank" />
    <Link to="/donate/" children="Donate" /> */}
  </NavBar>
  // {/* <a
  //   href="https://hackathons.hackclub.com/"
  //   children="Hackathons"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // />
  // <Link to="/bank/" children="Bank" />
  // <Link to="/donate/" children="Donate" /> */}
)

const MenuHeader = styled(Text).attrs(({ toggled }) => ({
  toggle: toggled,
}))`
  font-family: 'Arvo';
  display: ${props => (props.toggled ? 'none' : 'block')}};
  margin-left: ${props => (props.scrolled ? '-12px' : '0px')};

  ${theme.mediaQueries.md} {
    margin-left: 0.02em;
    font-size: 1.3em;
  }

  ${theme.mediaQueries.lg} {
    display: none;
  }
`

const ToggleContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
  min-width: calc(10px + 15%);
  min-height: 44px;
  cursor: pointer;
  user-select: none;
  margin-left: auto;
`

const Toggle = styled(Icon).attrs({})`
  display: block;
  transform: scale(1.5);
  ${theme.mediaQueries.md} {
    transform: scale(3);
  }
  ${theme.mediaQueries.lg} {
    display: none;
  }
`

class Header extends Component {
  state = {
    scrolled: false,
    toggled: false,
  }

  static defaultProps = {
    dark: false,
    color: 'white',
  }

  static propTypes = {
    color: PropTypes.string,
    bgColor: PropTypes.arrayOf(PropTypes.number),
    dark: PropTypes.bool,
    transparent: PropTypes.bool,
    fixed: PropTypes.bool,
  }

  componentDidMount() {
    this.bindScroll(true)
    if (typeof window !== 'undefined') {
      const mobileQuery = window.matchMedia('(max-width: 48em)')
      mobileQuery.addListener(() => {
        this.setState({ toggled: false })
      })
    }
  }

  componentWillUnmount = () => {
    this.bindScroll(false)
  }

  bindScroll = add => {
    if (typeof window !== 'undefined') {
      window[add ? 'addEventListener' : 'removeEventListener'](
        'scroll',
        this.onScroll
      )
    }
  }

  onScroll = () => {
    const newState = window.scrollY >= 300
    const { scrolled: oldState } = this.state

    if (newState !== oldState) {
      this.setState({
        scrolled: newState,
      })
    }
  }

  handleToggleMenu = () => {
    this.setState(state => ({
      toggled: !state.toggled,
    }))
  }

  render() {
    const { color, dark, fixed, bgColor, ...props } = this.props
    const { scrolled, toggled } = this.state
    const baseColor = dark
      ? color || 'white'
      : color === 'white' && scrolled
      ? 'black'
      : color
    const toggleColor = dark
      ? color || 'snow'
      : toggled || (color === 'white' && scrolled)
      ? 'slate'
      : color

    return (
      <Root
        {...props}
        fixed={fixed}
        scrolled={scrolled}
        toggled={toggled}
        dark={dark}
        bgColor={bgColor || (dark ? [32, 34, 36] : [255, 255, 255])}
      >
        <Content>
          {/* <Container> */}
          <MobileFlag  scrolled={scrolled || fixed} />
          {/* <MenuHeader
            // color={}
            fontSize={1}
            m={0}
            style={{ letterSpacing: '0em' }}
            bold
            ml={-2}
            onClick={this.handleToggleMenu}
            toggled={toggled}
            scrolled={scrolled || fixed}

            // children={}
          >
            {' '}
            menu{' '}
          </MenuHeader> */}
          {/* <Link to="/#services" children="Services" onClick={this.handleToggleMenu} /> */}
          {/* </Container> */}
          <Navigation  scrolled={scrolled || fixed} color={baseColor} dark={dark} toggled={toggled} />
          <ToggleContainer color={toggleColor}>
            <Toggle
              
              glyph={toggled ? 'view-close' : 'menu'}
              toggled={toggled}
              onClick={toggled ? this.handleToggleMenu : this.handleToggleMenu}
            />
          </ToggleContainer>
        </Content>
        <Navigation
          isMobile
          logo={false}
          toggled={toggled}
          color={baseColor}
          dark={dark}
          onClick={toggled ? this.handleToggleMenu : null}
        />
        {toggled && <ScrollLock />}
      </Root>
    )
  }
}

export default Header
