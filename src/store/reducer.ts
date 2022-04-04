import { v4 as uuid } from 'uuid';
import * as actionTypes from './actionTypes';
import AddressInfo from './forms-components/AddressInfo';
import { ContactInfo } from './forms-components/ContactInfo';
import PersonalInfo from './forms-components/PersonalInfo';
import { FloorInfo } from './forms-components/FloorInfo';
import { RecreationalAreaInfo } from './forms-components/RecreationalAreaInfo';
import { ParkingInfo } from './forms-components/ParkingInfo';
import { AmountInfo } from './forms-components/AmountInfo';
import { PicturesInfo } from './forms-components/PicturesInfo';
import { ElevatorInfo } from './forms-components/ElevatorInfo';
import {FinalResume} from '../components/FinalResume';
import { Link, useNavigate } from 'react-router-dom';
// import {
//   step_1,
//   step_2,
//   step_3,
//   step_4,
//   step_5,
//   step_6,
//   step_7,
//   step_8,
//   step_9,
//   step_10,
// } from './forms-content';
const steps_first_loaded: IStep[] = [
  {
    id: uuid(),
    description: 'Información Personal',
    route: 'personal-info',
    step_name: 'personal_info',
    step_number: 1,
    component: PersonalInfo(),
  },
  {
    id: uuid(),
    description: 'Contacto',
    route: 'contact-info',
    step_name: 'contact_info',
    step_number: 2,
    component: ContactInfo(),
  },
  {
    id: uuid(),
    description: 'Dirección',
    route: 'apartment-address',
    step_name: 'apartment_address',
    step_number: 3,
    component: AddressInfo(),
  },
  {
    id: uuid(),
    description: 'Piso',
    route: 'floor-number',
    step_name: 'floor_number',
    step_number: 4,
    component: FloorInfo(),
  },
  {
    id: uuid(),
    description: 'Área recreativa',
    route: 'area-recreativa',
    step_name: 'recreational_area',
    step_number: 5,
    component: RecreationalAreaInfo(),
  },
  {
    id: uuid(),
    description: 'Estacionamiento',
    route: 'parking',
    step_name: 'parking',
    step_number: 6,
    component: ParkingInfo(),
  },
  {
    id: uuid(),
    description: 'Costo',
    route: 'amount',
    step_name: 'amount',
    step_number: 7,
    component: AmountInfo(),
  },
  {
    id: uuid(),
    description: ' Fotos',
    route: 'pictures',
    step_name: 'pictures',
    step_number: 8,
    component: PicturesInfo(),
  },
  {
    id: uuid(),
    description: 'Elevador',
    route: 'elevador',
    step_name: 'elevator',
    step_number: 9,
    component: ElevatorInfo(),
  },
  {
    id: uuid(),
    description: '¡Listo!',
    route: 'ready',
    step_name: 'ready',
    step_number: 10,
    component: AddressInfo(),
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
        description: action.step.description,
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
