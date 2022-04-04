import { useSelector, shallowEqual } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainContainer } from '../pages/MainContainer';
import { HomePage } from '../pages/HomePage';

export const Navigation = () => {
  const active_step: IStep = useSelector(
    (state: StepsState) => state.active_step,
    shallowEqual
  );

  const steps: IStep[] = useSelector(
    (state: StepsState) => state.steps,
    shallowEqual
  );
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <Routes>
          <Route
            path='/register/*'
            element={
              <div className='app'>
                <MainContainer />
              </div>
            }
          >
          </Route>
          <Route path='' element={<HomePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
