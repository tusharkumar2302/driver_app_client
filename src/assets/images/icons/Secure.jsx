import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Secure = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 25}
    height={props.height || 26}
    viewbox="0 0 26 26"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#fff"}
      d="m10.4 0 9.487 2.964a1.3 1.3 0 0 1 .913 1.241V6.5h2.6a1.3 1.3 0 0 1 1.3 1.3v10.4a1.3 1.3 0 0 1-1.3 1.3l-4.186.001a7.786 7.786 0 0 1-1.82 1.73L10.4 26l-6.994-4.768A7.8 7.8 0 0 1 0 14.786V4.206a1.3 1.3 0 0 1 .913-1.24L10.4 0Zm0 2.722L2.6 5.161v9.625a5.2 5.2 0 0 0 2.025 4.12l.246.177 5.529 3.77 4.917-3.353H9.1a1.3 1.3 0 0 1-1.3-1.3V7.8a1.3 1.3 0 0 1 1.3-1.3h9.1V5.161l-7.8-2.439ZM10.4 13v3.9h11.7V13H10.4Zm0-2.6h11.7V9.1H10.4v1.3Z"
    />
  </Svg>
)
export default Secure
