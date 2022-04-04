import { useSelector, shallowEqual } from 'react-redux';
import { RenderPayload } from './RenderPayload';
export const Resume: React.FC = () => {
  const steps: IStep[] = useSelector(
    (state: StepsState) => state.steps,
    shallowEqual
  );
  return (
    <div className='resume-container bg-dark'>
      <h1 className='text-medium text-blue'>Resumen:</h1>
      {steps.map((step: IStep) =>
        step.payload !== undefined ? (
          <div key={step.id}>
            <h4 className='text-light'>{step.description}:</h4>
            <RenderPayload payload={step.payload} stepName={step.step_name} colorText={'text-light'}/>
          </div>
        ) : null
      )}
    </div>
  );
};
