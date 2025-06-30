import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Lock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 12}
    height={props.height || 12}
    viewBox="-4 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#758CA3"}
      fillRule="evenodd"
      d="M4 9h8.055V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5zm10.055.19A3.001 3.001 0 0 1 16 12v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-9c0-1.306.835-2.417 2-2.83V4a4 4 0 0 1 4-4h4.055a4 4 0 0 1 4 4v5.19zM3 11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H3zm4 4a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Lock
