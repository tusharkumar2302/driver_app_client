import * as React from "react"
import Svg, { Path } from "react-native-svg"
const User2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 23}
    height={props.height || 30}
    viewbox="0 0 30 30"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#BDBDBD"}
      d="M0 29.623a11.285 11.285 0 0 1 22.57 0h-2.821a8.464 8.464 0 0 0-16.928 0H0Zm11.285-12.696a8.461 8.461 0 0 1-8.464-8.463A8.461 8.461 0 0 1 11.285 0a8.461 8.461 0 0 1 8.464 8.464 8.461 8.461 0 0 1-8.464 8.463Zm0-2.82a5.641 5.641 0 0 0 5.642-5.643 5.64 5.64 0 0 0-5.642-5.643 5.64 5.64 0 0 0-5.642 5.643 5.641 5.641 0 0 0 5.642 5.642Z"
    />
  </Svg>
)
export default User2
