import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {theme} from '../../../styles/theme';

interface Props {
  width?: string | number;
  height?: string | number;
  color?: string;
}

export const IconClose = ({color, height, width}: Props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width ?? '16'}
      height={height ?? '16'}>
      <Path
        d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
        fill={color ?? theme.blackFont}
      />
    </Svg>
  );
};
