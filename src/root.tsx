import '../global.css';

import { PropsWithChildren } from 'react';

import { NativewindWrapper } from './core/nativewind-wrapper';
import { theme } from './theme/theme';

export function AppWrapper({ children }: PropsWithChildren) {
  return (
    <NativewindWrapper spacing={theme.spacing} edges={[]}>
      {children}
    </NativewindWrapper>
  );
}
