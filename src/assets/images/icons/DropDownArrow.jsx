import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DropDownArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      stroke="#BDBDBD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 1 6 6 6-6"
    />
  </Svg>
)
export default DropDownArrow
