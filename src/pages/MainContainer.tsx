import { useSelector, shallowEqual } from 'react-redux';
import { Stepper } from '../components/Stepper';
import { Resume } from '../components/Resume';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';
// import { DynamicForm } from '../components/DynamicForm';
import { FinalResume } from '../components/FinalResume';
import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { Route, Routes } from 'react-router-dom';
import { addStep, setActiveStep } from '../store/actionCreator';
import AddressInfo from '../store/forms-components/AddressInfo';
import PersonalInfo from '../store/forms-components/PersonalInfo';
export const MainContainer = (props: any) => {
  const is_mobile = useIsMobile();
  const steps: IStep[] = useSelector(
    (state: StepsState) => state.steps,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();
  const saveStep = (step: IStep) => {
    dispatch(addStep(step));
  };

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

  const [showResume, setShowResume] = useState(false);
  return (
    <div className='main-container' style={{ position: 'relative' }}>
      {!showResume ? (
        <>
          <Stepper steps={steps} />
          {active_step.step_number === 10 ? (
            <FinalResume />
          ) : (
            <div className='forms-container'>
              <Routes>
                {steps.map((step) => (
                  <Route
                    key={step.step_number}
                    path={step.route}
                    element={step.component}
                  ></Route>
                ))}
              </Routes>
              {/* {steps[8].component} */}
              {/* <DynamicForm
                stepToRender={active_step}
                nextStep={next_step}
                previousStep={previous_step}
              /> */}
            </div>
          )}
          {active_step.step_number !== 10 && !is_mobile ? <Resume /> : null}
        </>
      ) : null}
      {showResume && is_mobile ? (
        <div
          className='bg-dark'
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0 }}
        >
          <Resume></Resume>
          <div className='d-flex justify-content'>
            <button className='btn-blue' onClick={() => setShowResume(false)}>
              Aceptar
            </button>
          </div>
        </div>
      ) : null}
      {is_mobile && !showResume ? (
        <button
          className='btn-blue'
          style={{ position: 'absolute', bottom: -50, right: 10 }}
          onClick={() => setShowResume(true)}
        >
          Ver resumen
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
