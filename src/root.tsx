import { PropsWithChildren } from "react";
import { createTamagui, TamaguiProvider } from "tamagui";
import defaultConfig from "@tamagui/config/v3";

const config = createTamagui(defaultConfig);

export function AppRoot({ children }: PropsWithChildren) {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
}
