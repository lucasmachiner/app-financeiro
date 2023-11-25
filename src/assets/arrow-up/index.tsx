import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const IconArrowUp = ({width, height, color}: Props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width ?? '12'}
      height={height ?? '12'}>
      <Path d="M12 8L18 14H6L12 8Z" fill={color ?? 'rgba(0,0,0,1)'} />
    </Svg>
  );
};
