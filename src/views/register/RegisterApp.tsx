import { Provider } from "react-redux"
import Register from "./Register"
import { PersistGate } from "redux-persist/integration/react"

export default function RegisterApp(props: {
  Store: any
  Persistor: any
  Routing?: string
}) {
  return (
    <Provider store={props.Store}>
      <PersistGate loading={null} persistor={props.Persistor}>
        <Register />
      </PersistGate>
    </Provider>
  )
}
