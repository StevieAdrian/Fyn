import React, { Component, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import SimpleLoading from "../components/simple_loading"
import { createStore } from "redux"

const LoginApp = React.lazy(() => import("../views/login/LoginApp"))
const RegisterApp = React.lazy(() => import("../views/register/RegisterApp"))

const dummyReducer = (state = {}) => state
const dummyStore = createStore(dummyReducer)
const dummyPersistor = {
  purge: () => Promise.resolve(),
  flush: () => Promise.resolve(),
  pause: () => {},
  persist: () => {},
  dispatch: () => {},
  getState: () => ({
    bootstrapped: true,
  }),
  subscribe: (callback: any) => {
    callback()
    return () => {}
  },
} as any

class SuperApp extends Component {
  render() {
    return (
      <Suspense fallback={<SimpleLoading />}>
        <Routes>
          <Route path="/" element={<LoginApp Store={dummyStore} Persistor={dummyPersistor} />} />
          <Route path="/login" element={<LoginApp Store={dummyStore} Persistor={dummyPersistor} />} />
          <Route path="/register" element={<RegisterApp Store={dummyStore} Persistor={dummyPersistor} />} />
        </Routes>
      </Suspense>
    )
  }
}

export default SuperApp
