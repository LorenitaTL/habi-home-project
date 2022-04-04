import { useSelector, shallowEqual } from 'react-redux';
import { Stepper } from '../components/Stepper';
import { Resume } from '../components/Resume';
import { FinalResume } from '../components/FinalResume';
import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import { Route, Routes } from 'react-router-dom';
import { AddressInfo } from '../components/forms-components/AddressInfo';
import { PersonalInfo } from '../components/forms-components/PersonalInfo';
import { ContactInfo } from '../components/forms-components/ContactInfo';
import { FloorInfo } from '../components/forms-components/FloorInfo';
import { RecreationalAreaInfo } from '../components/forms-components/RecreationalAreaInfo';
import { ParkingInfo } from '../components/forms-components/ParkingInfo';
import { PicturesInfo } from '../components/forms-components/PicturesInfo';
import { ElevatorInfo } from '../components/forms-components/ElevatorInfo';
import { AmountInfo } from '../components/forms-components/AmountInfo';
export const MainContainer = (props: any) => {
  const is_mobile = useIsMobile();
  const steps: IStep[] = useSelector(
    (state: StepsState) => state.steps,
    shallowEqual
  );

  const active_step: IStep = useSelector(
    (state: StepsState) => state.active_step,
    shallowEqual
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
                <Route path='personal-info' element={<PersonalInfo />}></Route>
                <Route path='contact-info' element={<ContactInfo />}></Route>
                <Route
                  path='apartment-address'
                  element={<AddressInfo />}
                ></Route>
                <Route path='floor-number' element={<FloorInfo />}></Route>
                <Route
                  path='recreational-area'
                  element={<RecreationalAreaInfo />}
                ></Route>
                <Route path='parking' element={<ParkingInfo />}></Route>
                <Route path='amount' element={<AmountInfo />}></Route>
                <Route path='pictures' element={<PicturesInfo />}></Route>
                <Route path='elevator' element={<ElevatorInfo />}></Route>
                <Route path='ready' element={<FinalResume />}></Route>
              </Routes>
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
