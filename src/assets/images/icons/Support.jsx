import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Support = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewbox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#BDBDBD"}
      fillRule="evenodd"
      d="M0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0 0 5.372 0 12Zm21.6 0a9.6 9.6 0 0 1-9.6 9.6 9.6 9.6 0 1 1 9.6-9.6Zm-8.4 3.6V18h-2.4v-2.4h2.4Zm0-1.2v-.774a4.201 4.201 0 1 0-5.32-4.85l2.355.471A1.8 1.8 0 1 1 12 11.4a1.2 1.2 0 0 0-1.2 1.2v1.8h2.4Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Support
