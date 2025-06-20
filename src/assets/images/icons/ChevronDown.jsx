import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ChevronDown = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 13}
    height={props.height || 14}
    viewbox="0 0 14 14"
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || "#BDBDBD"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.25 5.25 3.25 3.5 3.25-3.5"
    />
  </Svg>
)
export default ChevronDown
