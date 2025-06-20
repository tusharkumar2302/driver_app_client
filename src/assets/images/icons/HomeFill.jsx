import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeFill = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 16}
    height={props.height || 15}
    viewbox="0 0 16 16"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      d="M13.92 13.508a.682.682 0 0 1-.681.681H3.693a.682.682 0 0 1-.682-.681V7.37H.966l7.04-6.4a.682.682 0 0 1 .919 0l7.04 6.4H13.92v6.136Z"
    />
  </Svg>
)
export default HomeFill
