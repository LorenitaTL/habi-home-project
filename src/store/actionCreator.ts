import * as actionTypes from "./actionTypes"

export function addStep(step: IStep) {
  const action: StepAction = {
    type: actionTypes.ADD_STEP,
    step,
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: StepAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}