import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const LocationPin = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 15}
    height={props.width || 15}
    fill="none"
    viewbox="0 0 15 15"
    {...props}
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={props.width || 15}
        height={props.height || 16}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill={props.color || "#fff"} d="M15 .5H0v15h15V.5Z" />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill={props.color || "#fff"}
          d="M12.888 5.281C12.23 2.394 9.713 1.094 7.5 1.094h-.006c-2.206 0-4.731 1.294-5.388 4.181-.73 3.225 1.244 5.956 3.032 7.675a3.397 3.397 0 0 0 2.362.956c.85 0 1.7-.319 2.356-.956 1.788-1.719 3.763-4.444 3.032-7.669ZM7.5 8.412a1.969 1.969 0 1 1 0-3.937 1.969 1.969 0 0 1 0 3.938Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || "#fff"} d="M0 0h15v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default LocationPin
