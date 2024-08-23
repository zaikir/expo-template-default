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
      <View className="mb-1 bg-red-500">
        <Text className="color-red-200">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
      <Text>{Env.APP_VERSION}</Text>
    </View>
  );
}
