import { Env } from '@kirz/expo-env';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="ml-edge mb-20 mt-3">
        <Text className="text-primary-600 font-inter text-sm" style={{}}>
          Edit app/index.tsx tot this reenE
        </Text>
      </View>
      <Text>{Env.APP_VERSION}</Text>
    </View>
  );
}
