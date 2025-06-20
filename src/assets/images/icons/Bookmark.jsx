import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Bookmark = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 25}
    height={props.height || 25}
    viewbox="0 0 25 25"
    fill="none"
    {...props}
  >
    <Path
      stroke={props.color || "#fff"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.stroke || 2}
      d="M19.792 21.875 12.5 16.667l-7.292 5.208V5.208a2.083 2.083 0 0 1 2.084-2.083h10.416a2.083 2.083 0 0 1 2.084 2.083v16.667Z"
    />
  </Svg>
)
export default Bookmark
