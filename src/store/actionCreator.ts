import * as actionTypes from './actionTypes';

// TODO: Save in session storage
export function addStep(step: IStep) {
  const action: StepAction = {
    type: actionTypes.ADD_STEP,
    step,
  };

  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: StepAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function setActiveStep(step: IStep) {
  const action: StepAction = {
    type: actionTypes.SET_ACTIVE_STEP,
    step,
  };

  return simulateHttpRequest(action);
}
