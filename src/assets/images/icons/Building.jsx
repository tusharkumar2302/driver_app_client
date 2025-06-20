import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const Building = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 15}
    height={props.height || 15}
    viewbox="0 0 15 15"
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
      <G fill={props.color || "#fff"} mask="url(#b)">
        <Path d="M13.75 13.281H1.25a.472.472 0 0 0-.469.469c0 .256.213.469.469.469h12.5a.472.472 0 0 0 .469-.469.472.472 0 0 0-.469-.469Z" />
        <Path d="M10.625 1.25h-6.25c-1.875 0-2.5 1.119-2.5 2.5v10h11.25v-10c0-1.381-.625-2.5-2.5-2.5ZM6.25 10.781H4.375a.472.472 0 0 1-.469-.469c0-.256.213-.468.469-.468H6.25c.256 0 .469.212.469.469a.472.472 0 0 1-.469.468Zm0-2.812H4.375a.472.472 0 0 1-.469-.469c0-.256.213-.469.469-.469H6.25c.256 0 .469.213.469.469a.472.472 0 0 1-.469.469Zm0-2.813H4.375a.472.472 0 0 1-.469-.468c0-.257.213-.47.469-.47H6.25c.256 0 .469.213.469.47a.472.472 0 0 1-.469.468Zm4.375 5.625H8.75a.472.472 0 0 1-.469-.469c0-.256.213-.468.469-.468h1.875c.256 0 .469.212.469.469a.472.472 0 0 1-.469.468Zm0-2.812H8.75a.472.472 0 0 1-.469-.469c0-.256.213-.469.469-.469h1.875c.256 0 .469.213.469.469a.472.472 0 0 1-.469.469Zm0-2.813H8.75a.472.472 0 0 1-.469-.468c0-.257.213-.47.469-.47h1.875c.256 0 .469.213.469.47a.472.472 0 0 1-.469.468Z" />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || "#fff"} d="M0 0h15v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Building
