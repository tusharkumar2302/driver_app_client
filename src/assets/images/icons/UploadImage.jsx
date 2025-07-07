import * as React from "react"
import Svg, { Path } from "react-native-svg"
const UploadImage = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={75}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M65.625 46.875v12.5a6.25 6.25 0 0 1-6.25 6.25h-43.75a6.25 6.25 0 0 1-6.25-6.25v-12.5M53.125 25 37.5 9.375 21.875 25M37.5 9.375v37.5"
    />
  </Svg>
)
export default UploadImage
