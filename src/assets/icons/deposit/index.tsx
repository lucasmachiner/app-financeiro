import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: string | number;
  width?: string | number;
  color?: string;
}

export const IconDeposit = ({width, height, color}: Props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height ?? 32}
      width={width ?? 32}>
      <Path d="M12 8L18 14H6L12 8Z" fill={color ?? 'rgba(51,204,149,1)'} />
    </Svg>
  );
};
