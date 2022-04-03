import { v4 as uuid } from 'uuid';
import * as actionTypes from './actionTypes';
import {
  step_1,
  step_2,
  step_3,
  step_4,
  step_5,
  step_6,
  step_7,
  step_8,
  step_9,
  step_10,
} from './forms-content';
const steps_first_loaded = [
  {
    id: uuid(),
    title: 'Información Personal',
    route: 'personal-info',
    step_name: 'personal_info',
    step_number: 1,
    component: step_1,
  },
  {
    id: uuid(),
    title: 'Contacto',
    route: 'contact-info',
    step_name: 'contact_info',
    step_number: 2,
    component: step_2,
  },
  {
    id: uuid(),
    title: 'Dirección',
    route: 'apartment-address',
    step_name: 'apartment_address',
    step_number: 3,
    component: step_3,
  },
  {
    id: uuid(),
    title: 'Piso',
    route: 'floor-number',
    step_name: 'floor_number',
    step_number: 4,
    component: step_4,
  },
  {
    id: uuid(),
    title: 'Área recreativa',
    route: 'area-recreativa',
    step_name: 'recreational_area',
    step_number: 5,
    component: step_5,
  },
  {
    id: uuid(),
    title: 'Estacionamiento',
    route: 'parking',
    step_name: 'parking',
    step_number: 6,
    component: step_6,
  },
  {
    id: uuid(),
    title: 'Costo',
    route: 'amount',
    step_name: 'amount',
    step_number: 7,
    component: step_7,
  },
  {
    id: uuid(),
    title: ' Fotos',
    route: 'pictures',
    step_name: 'pictures',
    step_number: 8,
    component: step_8,
  },
  {
    id: uuid(),
    title: 'Elevador',
    route: 'elevador',
    step_name: 'elevator',
    step_number: 9,
    component: step_9,
  },
  {
    id: uuid(),
    title: '¡Listo!',
    route: 'ready',
    step_name: 'ready',
    step_number: 10,
    component: step_10,
  },
];
const initialState: StepsState = {
  steps: steps_first_loaded,
  active_step: steps_first_loaded[0],
};

sessionStorage.setItem('steps', JSON.stringify(initialState.steps));

const reducer = (
  state: StepsState = initialState,
  action: StepAction
): StepsState => {
  switch (action.type) {
    case actionTypes.ADD_STEP:
      const new_step: IStep = {
        id: action.step.id,
        title: action.step.title,
        route: action.step.route,
        step_name: action.step.step_name,
        step_number: action.step.step_number,
        payload: action.step.payload,
        component: action.step.component,
      };
      const remove_step = state.steps.filter(
        (step) => step.id !== action.step.id
      );
      const save_steps = remove_step.concat(new_step);
      sessionStorage.setItem('steps', JSON.stringify(save_steps));
      return {
        ...state,
        steps: save_steps,
      };
    case actionTypes.SET_ACTIVE_STEP:
      return {
        ...state,
        active_step: action.step,
      };
    // TODO: Action for update step
  }
  return state;
};

export default reducer;
