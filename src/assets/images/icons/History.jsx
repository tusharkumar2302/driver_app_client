import * as React from "react"
import Svg, { Path } from "react-native-svg"
const History = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 24}
    height={props.height || 24}
    viewbox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      fill={props.color || "#BDBDBD"}
      fillOpacity={0.957}
      d="M12 0c6.628 0 12 5.372 12 12s-5.372 12-12 12S0 18.628 0 12h2.4c0 5.302 4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6-4.298-9.6-9.6-9.6a9.586 9.586 0 0 0-7.938 4.2H7.2V9H0V1.8h2.4v3A11.977 11.977 0 0 1 12 0Zm1.2 6v5.502l3.892 3.892-1.698 1.698-4.594-4.596V6h2.4Z"
    />
  </Svg>
)
export default History
