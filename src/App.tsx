import React from 'react';
import {StatusBar, useColorScheme, View} from 'react-native';

import {CalculatorScreen} from './presentation/screens/CalculatorScreen';
import {style} from './config/theme/appTheme';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={isDarkMode ? style.bgDark : style.bgLight}>
      <StatusBar
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen isDark={isDarkMode} />
    </View>
  );
}

export default App;
