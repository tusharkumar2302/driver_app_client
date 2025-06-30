import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const Map = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 12}
    height={props.width || 12}
    viewBox="0 0 12 12"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={props.width || 12}
        height={props.width || 12}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path fill={props.color || "#fff"} d="M12 0H0v12h12V0Z" />
      </Mask>
      <G fill={props.color || "#fff"} mask="url(#b)">
        <Path
          d="M9.94 10.47c-.475.35-1.1.53-1.845.53h-4.19c-.12 0-.24-.005-.355-.02L7 7.53l2.94 2.94ZM11 3.905v4.19c0 .745-.18 1.37-.53 1.845L7.53 7l3.45-3.45c.015.115.02.235.02.355Z"
          opacity={0.4}
        />
        <Path
          d="m7.53 7 2.94 2.94c-.145.21-.32.385-.53.53L7 7.53l-3.45 3.45c-.32-.02-.61-.085-.875-.185C1.605 10.405 1 9.455 1 8.095v-4.19C1 2.085 2.085 1 3.905 1h4.19c1.36 0 2.31.605 2.7 1.675.1.265.165.555.185.875L7.53 7Z"
          opacity={0.4}
        />
        <Path d="m7.53 7 2.94 2.94c-.145.21-.32.385-.53.53L7 7.53l-3.45 3.45c-.32-.02-.61-.085-.875-.185l.195-.195 7.925-7.925c.1.265.165.555.185.875L7.53 7ZM6.12 3.965c-.19-.825-.92-1.195-1.56-1.2-.64 0-1.37.37-1.56 1.195-.21.915.35 1.68.855 2.16.2.19.45.28.705.28.255 0 .505-.095.705-.28.505-.48 1.065-1.245.855-2.155Zm-1.545.78a.501.501 0 0 1-.5-.5c0-.275.22-.5.5-.5h.005c.275 0 .5.225.5.5s-.23.5-.505.5Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || "#fff"} d="M0 0h12v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Map
