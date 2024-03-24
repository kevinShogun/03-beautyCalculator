/* eslint-disable react/react-in-jsx-scope */
import {Platform, Pressable, Text, useColorScheme} from 'react-native';
import {style} from '../../config/theme/appTheme';

interface Props {
  label: string;
  color?: string;
  onPress: () => void;
}

export const CalculatorBtn = ({label, color, onPress}: Props) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <Pressable
      style={({pressed}) => [
        isDark ? style.buttonDark : style.buttonLight,
        Platform.OS === 'ios' && {
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
          backgroundColor: color ? color : isDark ? '#3a3536' : '#d7cacf',
          width: color ? 180 : 80,
          opacity: pressed ? 0.8 : 1,
        },
        Platform.OS === 'android' && {
          elevation: pressed ? 2 : 4,
          backgroundColor: color ? color : isDark ? '#3a3536' : '#d7cacf',
          width: color ? 180 : 80,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
      onPress={onPress}>
      <Text style={isDark ? style.btnTextDark : style.btnTextLight}>
        {label}
      </Text>
    </Pressable>
  );
};
