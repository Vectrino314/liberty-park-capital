import { theme } from '@hackclub/design-system'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const Flag = styled(Link)`
  background: url(/Ardorem_Sun.svg) no-repeat;
  background-size: contain;
  background-position: center;
  flex-shrink: 0;
  width: 78px;
  margin: 10px;
  height: 48px;
  transform: scale(1);
  transition: ${theme.transition} transform;
  transform-origin: center;
  // transition: all 1s ease-in-out;
  ${theme.mediaQueries.md} {
    // transition: all 1s ease-in-out;
    transform: scale(1);
    width: 100px;
    height: 140px;
  }
  ${props =>
    props.scrolled &&
    css`
      // background: url(/buildingsLogo.svg) no-repeat;
      transform: scale(.75);
      // transition: all 1s ease-in-out;
      // transition-delay: 1s;
      // margin: 10px;
      height: 44px !important;
      ${theme.mediaQueries.md} {
        // background: url(/buildingsLogo.svg) no-repeat;
        height: 78px !important;
      }
    `};
`
Flag.defaultProps = {
  to: '/',
  'aria-label': 'Homepage'
}

export default Flag
