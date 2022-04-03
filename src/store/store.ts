import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"


export const store: Store<StepsState, StepAction> & {
    dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk))