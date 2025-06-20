import * as React from "react"
import Svg, { Path } from "react-native-svg"
const StarFill = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 22}
    height={props.height || 22}
    viewbox="0 0 22 22"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      stroke={props.color || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11 1 3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01L11 1Z"
    />
  </Svg>
)
export default StarFill
