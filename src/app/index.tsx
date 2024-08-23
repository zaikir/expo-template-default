import { Env } from '@kirz/expo-env';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text className="w-8 font-inter color-primary-300">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text>{Env.APP_VERSION}</Text>
    </View>
  );
}
