import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const ArrowRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewbox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={props.width || 24}
        height={props.width || 24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill={props.color || "#fff"} d="M0 24h24V0H0v24Z" />
      </Mask>
      <G fill={props.color || "#fff"} mask="url(#b)">
        <Path d="M9.57 5.18c.19 0 .38.07.53.22.29.29.29.77 0 1.06L4.56 12l5.54 5.54c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-6.07-6.07a.754.754 0 0 1 0-1.06L9.04 5.4c.15-.15.34-.22.53-.22Z" />
        <Path d="M3.67 11.25H20.5c.41 0 .75.34.75.75s-.34.75-.75.75H3.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || "#fff"} d="M24 24H0V0h24z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default ArrowRight
