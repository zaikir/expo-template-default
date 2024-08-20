import { Env } from "@env";
import { Text, View } from "react-native";

console.log(Env.APP_NAME);

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>{Env.NODE_ENV}</Text>
    </View>
  );
}
