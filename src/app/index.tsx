import { Env } from '@kirz/expo-env';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      <View className="mb-20 mt-3">
        <Text className="text-sm" style={{}}>
          Edit app/index.tsx tot this reenE
        </Text>
      </View>
      <Text>{Env.APP_VERSION}</Text>
    </View>
  );
}
