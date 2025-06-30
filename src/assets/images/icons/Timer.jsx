import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const Timer = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 15}
    height={props.height || 15}
    viewBox="0 0 15 15"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={props.width || 15}
        height={props.width || 15}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill={props.color || "#fff"} d="M15 0H0v15h15V0Z" />
      </Mask>
      <G
        stroke={props.color || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        mask="url(#b)"
      >
        <Path d="M12.969 8.281A5.47 5.47 0 0 1 7.5 13.75a5.47 5.47 0 0 1-5.469-5.469A5.47 5.47 0 0 1 7.5 2.812a5.47 5.47 0 0 1 5.469 5.47ZM7.5 5v3.125" />
        <Path strokeMiterlimit={10} d="M5.625 1.25h3.75" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || "#fff"} d="M0 0h15v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Timer
