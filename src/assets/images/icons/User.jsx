import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const User = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 16}
    height={props.height || 16}
    viewbox="0 0 16 16"
    fill="none"
    {...props}
  >
    <G
      stroke={props.color || "#C2C2C2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <Path d="M8 7.333A2.667 2.667 0 1 0 8 2a2.667 2.667 0 0 0 0 5.333ZM4 14v-1.333A2.667 2.667 0 0 1 6.667 10h2.666A2.667 2.667 0 0 1 12 12.667V14" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default User
