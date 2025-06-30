import { Provider } from 'react-redux'
import Login from './Login'
import { PersistGate } from 'redux-persist/integration/react';


export default function LoginApp(props: {
  Store: any;
  Persistor: any;
  Routing?: string;
}) {
  return (
    <Provider store={props.Store}>
      <PersistGate
        loading={null}
        persistor={props.Persistor}
      >
        <Login />
      </PersistGate>
    </Provider>
  )
}
