import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addStep, setActiveStep } from '../../store/actionCreator';
import { useSelector, shallowEqual } from 'react-redux';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
export const PicturesInfo:React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const steps: IStep[] = useSelector(
    (state: StepsState) => state.steps,
    shallowEqual
  );
  const saveStep =  useCallback(
    (step: IStep) => dispatch(addStep(step)),
    [dispatch]
  );

  const activeStep = useCallback(
    (step: IStep) => dispatch(setActiveStep(step)),
    [dispatch]
  );

  const step = steps.find((step) => step.step_number === 8);
  const next_step = steps.find((step) => step.step_number === 9);
  return (
    <div>
      <h2 className='text-blue'>Información de Contacto</h2>
      <Formik
        initialValues={{
          photo: '',
        }}
        onSubmit={(values) => {
          const new_step = { ...step!, payload: values };
          activeStep(next_step!);
          saveStep(new_step);
          navigate(`../${next_step!.route}`);
        }}
      >
        {(formik) => (
          <Form>
            <div className='input-form'>
              <label htmlFor='photo'>Selecciona una foto</label>
              <input
                name='photo'
                type='file'
                onChange={(event) => {
                  formik.setFieldValue(
                    event.target.name,
                    event.currentTarget.files![0]
                  );
                }}
              />
            </div>
            <div className='d-flex justify-content  my-2'>
              <button
                type='button'
                className='btn-dark'
                onClick={() => navigate('../amount')}
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: '5px',
                  }}
                />
                Anterior
              </button>
              <button type='submit' className='btn-blue'>
                Siguiente{' '}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: '5px',
                  }}
                />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
