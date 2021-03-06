import { useSelector, shallowEqual } from 'react-redux';
import { RenderPayload } from './RenderPayload';
export const FinalResume: React.FC = () => {
  const steps: IStep[] = useSelector(
    (state: StepsState) => state.steps,
    shallowEqual
  );
  return (
    <div className='forms-container'>
      <h1 className='text-medium text-blue'>Resumen:</h1>
      {steps.map((step: IStep) =>
        step.payload !== undefined ? (
          <div key={step.id}>
            <h4 className='text-dark'>{step.description}:</h4>
            <RenderPayload
              payload={step.payload}
              stepName={step.step_name}
              colorText={'text-dark'}
            />
          </div>
        ) : null
      )}
      <button
      className='btn-blue text-light'
      onClick={()=>window.location.href = "/"}
      >Aceptar</button>
    </div>
  );
};
