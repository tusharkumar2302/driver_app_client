import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Home = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 32}
    height={props.height || 29}
    viewBox="0 0 32 29"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#BDBDBD"}
      fillRule="evenodd"
      d="M4.323 26.87c0 .796.645 1.441 1.44 1.441h20.173a1.44 1.44 0 0 0 1.441-1.44V13.902H31.7L16.82.375c-.55-.5-1.39-.5-1.94 0L0 13.902h4.323v12.969Zm20.172-15.623V25.43H7.205V11.247l8.645-7.859 8.645 7.859Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Home
