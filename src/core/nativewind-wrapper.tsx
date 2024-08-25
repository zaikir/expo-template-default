import { vars } from 'nativewind';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

import { buildValue } from '../../tailwind.config';
import { scaleX, scaleY } from './scale';

type NativeWindWrapperProps = PropsWithChildren<{
  spacing: number[];
  edges: number[];
}>;

const scaleValue = (value: number, type?: 'x' | 'y') => {
  if (type === 'x') {
    return scaleX(value);
  }

  return scaleY(value);
};

export function NativewindWrapper({
  children,
  spacing,
  edges,
}: NativeWindWrapperProps) {
  return (
    <View
      style={[
        { flex: 1 },
        vars(
          Object.fromEntries(
            (['x', 'y'] as const).flatMap((v) =>
              spacing.map((s) => [
                buildValue(s, v).replace('var(', '').replace(')', ''),
                scaleValue(s, v),
              ])
            )
          )
        ),
      ]}>
      {children}
    </View>
  );
}
