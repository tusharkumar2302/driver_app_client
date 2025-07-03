import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ChevronLeft = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 4}
    height={props.height || 8}
    fill="none"
    viewBox="0 0 8 8"
    {...props}
  >
    <Path
      fill={props.color || '#fff'}
      d="M4 4c0 .323-.126.646-.372.89L.594 7.9a.353.353 0 0 1-.493 0 .346.346 0 0 1 0-.49l3.034-3.008a.565.565 0 0 0 0-.804L.1.59a.346.346 0 0 1 0-.49.353.353 0 0 1 .493 0l3.034 3.01c.246.244.372.567.372.89Z"
    />
  </Svg>
);
export default ChevronLeft;
