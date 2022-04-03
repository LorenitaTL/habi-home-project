import { useSelector, shallowEqual } from 'react-redux';
import { Stepper } from './Stepper';
import { Resume } from './Resume';
import { DynamicForm } from './DynamicForm';
export const MainContainer: React.FC = () => {
  const steps: IStep[] = useSelector(
    (state: StepsState) => state.steps,
    shallowEqual
  );

  const active_step: IStep = useSelector(
    (state: StepsState) => state.active_step,
    shallowEqual
  );

  const previous_step = steps.find(
    (step) => step.step_number === active_step.step_number - 1
  );

  const next_step = steps.find(
    (step) => step.step_number === active_step.step_number + 1
  );

  return (
    <div className='main-container'>
      <Stepper steps={steps} />
      <div className='forms-container'>
        <DynamicForm
          stepToRender={active_step}
          nextStep={next_step}
          previousStep={previous_step}
        />
      </div>
      <Resume />
    </div>
  );
};
