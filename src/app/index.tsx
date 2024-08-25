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
      <View className="mb-60">
        {/* height-full max-h-auto mx-12 mt-2 size-2 max-w-xl basis-1 gap-1 hover:gap-y-20 */}
        <Text className="text-lg">Edit app/index.tsx to edit this screen.</Text>
      </View>
      <Text>{Env.APP_VERSION}</Text>
    </View>
  );
}
