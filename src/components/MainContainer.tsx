import { useSelector, shallowEqual } from 'react-redux';
import { Stepper } from './Stepper';
import { Resume } from './Resume';
import { DynamicForm } from './DynamicForm';
export const MainContainer: React.FC = () => {
  const steps: IStep[] = useSelector(
    (state: StepsState) => state.steps,
    shallowEqual
  );
  return (
    <div className='main-container'>
      <Stepper steps={steps} />
      <div className='forms-container'>
        <DynamicForm step={steps[2]} />
      </div>
      <Resume />
    </div>
  );
};
