import * as React from "react"
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg"
const CircleCross = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 20}
    height={props.height || 20}
    viewbox="0 0 20 20"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Rect width={props.width || 20} height={props.width || 20} fill="#fff" rx={10} />
      <Path
        fill="#000"
        d="m6.508 15 2.783-4.032-2.784-4.032h1.729l2.111 3.136 2.129-3.136h1.711l-2.784 4.032L14.188 15h-1.711l-2.129-3.152L8.236 15H6.506Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={props.width || 20} height={props.width || 20} fill="#fff" rx={10} />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CircleCross
