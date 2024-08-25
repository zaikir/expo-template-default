import { vars } from 'nativewind';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { buildValue } from '../../tailwind.config';

type NativeWindWrapperProps = PropsWithChildren<{
  spacing: (number | string)[];
  edges: number[];
}>;

export function NativewindWrapper({
  children,
  spacing,
  edges,
}: NativeWindWrapperProps) {
  console.log({
    ...Object.fromEntries(
      (['x', 'y'] as const).flatMap((v) =>
        spacing.map((s) => [
          buildValue(s, v).replace('var(', '').replace(')', ''),
          `${20}rem`,
        ])
      )
    ),
  });

  return (
    <View
      style={{
        flex: 1,
        ...vars({
          '--spacing-y-32': `${40}rem`,
          // [`--spacing-y-32`]: 10,
          // ...Object.fromEntries(
          //   (['x', 'y'] as const).flatMap((v) =>
          //     spacing.map((s) => [
          //       buildValue(s, v).replace('var(', '').replace(')', ''),
          //       `${20}rem`,
          //     ])
          //   )
          // ),
        }),
      }}>
      {children}
    </View>
  );
}
