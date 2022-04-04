import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addStep, setActiveStep } from '../../store/actionCreator';
import { useSelector, shallowEqual } from 'react-redux';
import * as Yup from 'yup';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
export const ElevatorInfo:React.FC = () => {
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

  const step = steps.find((step) => step.step_number === 9);
  const next_step = steps.find((step) => step.step_number === 10);
  return (
    <div>
      <h2 className='text-blue'>Elevador</h2>
      <Formik
        initialValues={{
          elevator: '',
        }}
        onSubmit={(values) => {
          const new_step = { ...step!, payload: values };
          activeStep(next_step!);
          saveStep(new_step);
          navigate(`../${next_step!.route}`);
        }}
        validationSchema={Yup.object({
          elevator: Yup.string().required('Requerido'),
        })}
      >
        {(formik) => (
          <Form>
            <div className='input-form'>
              <p>¿El departamento cuenta con elevador?</p>
              <label>
                <Field type='radio' name='elevator' value='Si' />
                Sí
              </label>
              <label>
                <Field type='radio' name='elevator' value='No' />
                No
              </label>
              <ErrorMessage name='parking' component='span' />
            </div>
            <div className='d-flex justify-content  my-2'>
              <button
                type='button'
                className='btn-dark'
                onClick={() => navigate('../elevator')}
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
