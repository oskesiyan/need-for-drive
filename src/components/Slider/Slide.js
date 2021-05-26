/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const Slide = ({ content }) => (
  <div
    css={css`
      height: 811px;
      width: 688px;
      
      background-image: url(${content});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)

export default Slide