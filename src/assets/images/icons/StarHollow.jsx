import * as React from "react"
import Svg, { Path } from "react-native-svg"
const StarHollow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 22}
    height={props.height || 22}
    viewbox="0 0 22 22"
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11 1 3.09 6.253L21 8.263l-5 4.864L17.18 20 11 16.753 4.82 20 6 13.127 1 8.262l6.91-1.009L11 1Z"
    />
  </Svg>
)
export default StarHollow
