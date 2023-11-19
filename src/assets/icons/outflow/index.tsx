import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: string | number;
  width?: string | number;
  color?: string;
}

export const IconOutflow = ({height, width, color}: Props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height ?? 32}
      width={width ?? 32}>
      <Path d="M12 16L6 10H18L12 16Z" fill={color ?? 'rgba(229,46,77,1)'} />
    </Svg>
  );
};
