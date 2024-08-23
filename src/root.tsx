import '../global.css';

import { vars } from 'nativewind';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

export function AppWrapper({ children }: PropsWithChildren) {
  return (
    <View className="flex-1" style={vars({ '--spacing-1': `${30}px` })}>
      {children}
    </View>
  );
}

/*
@kirz/nativewind-scale
NativeWind: 
1.
*/
