declare module 'redux-persist/integration/react' {
  import * as React from 'react';
  import type { Persistor } from 'redux-persist';

  export interface PersistGateProps {
    loading?: React.ReactNode | null;
    children?: React.ReactNode;
    persistor: Persistor;
    onBeforeLift?: () => Promise<any> | void;
  }

  export class PersistGate extends React.Component<PersistGateProps> {}
}
