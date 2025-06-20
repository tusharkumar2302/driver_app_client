import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MagnifyingGlass = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 20}
    height={props.height || 20}
    viewbox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.stroke || 1.25}
      d="M9.806 17.297a7.49 7.49 0 1 0 0-14.982 7.49 7.49 0 0 0 0 14.982ZM15.015 15.404l2.937 2.93"
    />
  </Svg>
)
export default MagnifyingGlass
