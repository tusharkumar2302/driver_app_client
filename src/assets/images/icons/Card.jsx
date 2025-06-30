import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Card = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path fill={props.color || "#fff"} d="M0 0h24v24H0z" />
    <Path
      fill={props.fill || "#000"}
      d="M22.56 3.84H1.44C.646 3.84 0 4.486 0 5.28v13.44c0 .794.646 1.44 1.44 1.44h21.12c.794 0 1.44-.646 1.44-1.44V5.28c0-.794-.646-1.44-1.44-1.44Zm.48 14.88c0 .264-.216.48-.48.48H1.44a.48.48 0 0 1-.48-.48V5.28a.48.48 0 0 1 .48-.48h21.12a.48.48 0 0 1 .48.48v13.44Z"
    />
    <Path fill={props.fill || "#000"} d="M23.52 8.16H.48v1.92h23.04V8.16Z" />
    <Path
      fill={props.fill || "#000"}
      d="M23.52 7.68H.48a.48.48 0 0 0-.48.48v1.92c0 .265.215.48.48.48h23.04a.48.48 0 0 0 .48-.48V8.16a.48.48 0 0 0-.48-.48Zm-.48 1.92H.96v-.96h22.08v.96ZM12.96 13.44H4.32a.48.48 0 0 0 0 .96h8.64a.48.48 0 0 0 0-.96ZM9.12 15.36h-4.8a.48.48 0 0 0 0 .96h4.8a.48.48 0 0 0 0-.96Z"
    />
  </Svg>
)
export default Card
