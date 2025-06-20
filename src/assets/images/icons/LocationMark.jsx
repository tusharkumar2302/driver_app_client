import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const LocationMark = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 18}
    height={props.height || 18}
    viewbox="0 0 18 18"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={18}
        height={18}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill={props.color || "#fff"} d="M18 0H0v18h18V0Z" />
      </Mask>
      <G fill={props.color || "#fff"} mask="url(#b)">
        <Path d="M9 15.188A6.194 6.194 0 0 1 2.812 9 6.194 6.194 0 0 1 9 2.812 6.194 6.194 0 0 1 15.188 9 6.194 6.194 0 0 1 9 15.188Zm0-11.25A5.07 5.07 0 0 0 3.937 9 5.07 5.07 0 0 0 9 14.063 5.07 5.07 0 0 0 14.063 9 5.07 5.07 0 0 0 9 3.937Z" />
        <Path d="M9 11.813a2.814 2.814 0 0 1 0-5.626 2.814 2.814 0 0 1 0 5.625Zm0-4.5A1.69 1.69 0 0 0 7.312 9c0 .93.758 1.688 1.688 1.688A1.69 1.69 0 0 0 10.688 9 1.69 1.69 0 0 0 9 7.312ZM9 3.563A.567.567 0 0 1 8.437 3V1.5c0-.308.256-.563.563-.563.307 0 .563.255.563.563V3A.567.567 0 0 1 9 3.563ZM3 9.563H1.5A.567.567 0 0 1 .937 9c0-.307.255-.563.563-.563H3c.308 0 .563.256.563.563A.567.567 0 0 1 3 9.563ZM9 17.063a.567.567 0 0 1-.563-.563V15c0-.307.256-.563.563-.563.307 0 .563.256.563.563v1.5a.567.567 0 0 1-.563.563ZM16.5 9.563H15A.567.567 0 0 1 14.437 9c0-.307.256-.563.563-.563h1.5c.308 0 .563.256.563.563a.567.567 0 0 1-.563.563Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || "#fff"} d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default LocationMark
