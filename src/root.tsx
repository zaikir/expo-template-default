import '../global.css';

import { NativewindWrapper } from '@kirz/nativewind-scale';
import { PropsWithChildren } from 'react';

import config from '../tailwind.config';

export function AppWrapper({ children }: PropsWithChildren) {
  return <NativewindWrapper config={config}>{children}</NativewindWrapper>;
}
