/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {colors, style} from '../../config/theme/appTheme';
import {CalculatorBtn} from '../components/CalculatorBtn';
import {useCalculator} from '../hooks/useCalculator';

interface Props {
  isDark?: boolean;
}

export const CalculatorScreen = ({isDark = false}: Props) => {
  const {height} = Dimensions.get('window');
  const containerHeight = height * 0.3;

  const {
    formula,
    prevNumber,
    buildNumber,
    clean,
    toogleSing,
    deleteOperation,
    divideOperartion,
    addOperartion,
    subtractOperartion,
    multiplyOperartion,
    calulateResult,
  } = useCalculator();
  return (
    <>
      <View
        style={{
          backgroundColor: !isDark ? colors.dark : colors.main,
          height: containerHeight,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 10,
          marginBottom: 30,
        }}>
        {formula === prevNumber ? (
          <Text />
        ) : (
          <Text
            style={isDark ? style.mainResultDark : style.mainResultLight}
            adjustsFontSizeToFit
            numberOfLines={1}>
            {prevNumber === '0' ? '' : prevNumber}
          </Text>
        )}
        <Text
          style={isDark ? style.subResultDark : style.subResultLigth}
          adjustsFontSizeToFit
          numberOfLines={1}>
          {formula}
        </Text>
      </View>
      <View style={style.row}>
        <CalculatorBtn label="C" onPress={() => clean()} />
        <CalculatorBtn label="+/-" onPress={() => toogleSing()} />
        <CalculatorBtn label="DEL" onPress={() => deleteOperation()} />
        <CalculatorBtn label="÷" onPress={divideOperartion} />
      </View>

      <View style={style.row}>
        <CalculatorBtn label="7" onPress={() => buildNumber('7')} />
        <CalculatorBtn label="8" onPress={() => buildNumber('8')} />
        <CalculatorBtn label="9" onPress={() => buildNumber('9')} />
        <CalculatorBtn label="x" onPress={multiplyOperartion} />
      </View>

      <View style={style.row}>
        <CalculatorBtn label="4" onPress={() => buildNumber('4')} />
        <CalculatorBtn label="5" onPress={() => buildNumber('5')} />
        <CalculatorBtn label="6" onPress={() => buildNumber('6')} />
        <CalculatorBtn label="-" onPress={subtractOperartion} />
      </View>

      <View style={style.row}>
        <CalculatorBtn label="1" onPress={() => buildNumber('1')} />
        <CalculatorBtn label="2" onPress={() => buildNumber('2')} />
        <CalculatorBtn label="3" onPress={() => buildNumber('3')} />
        <CalculatorBtn label="+" onPress={addOperartion} />
      </View>

      <View style={style.row}>
        <CalculatorBtn label="0" onPress={() => buildNumber('0')} />
        <CalculatorBtn label="." onPress={() => buildNumber('.')} />
        <CalculatorBtn
          label="="
          color={!isDark ? '#3a3536' : '#d7cacf'}
          onPress={calulateResult}
        />
      </View>
    </>
  );
};
