import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addStep, setActiveStep } from '../../store/actionCreator';
import { useSelector, shallowEqual } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';

export const FloorInfo: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const steps: IStep[] = useSelector(
    (state: StepsState) => state.steps,
    shallowEqual
  );
  const saveStep = useCallback(
    (step: IStep) => dispatch(addStep(step)),
    [dispatch]
  );

  const activeStep = useCallback(
    (step: IStep) => dispatch(setActiveStep(step)),
    [dispatch]
  );

  const step = steps.find((step) => step.step_number === 4);
  const next_step = steps.find((step) => step.step_number === 5);
  return (
    <div>
      <h2 className='text-blue'>Piso</h2>
      <Formik
        initialValues={{
          floor: '',
        }}
        onSubmit={(values) => {
          const new_step = { ...step!, payload: values };
          activeStep(next_step!);
          saveStep(new_step);
          navigate(`../${next_step!.route}`);
        }}
        validationSchema={Yup.object({
          floor: Yup.string()
            .required('Requerido')
            .test(
              'Menor a 50?',
              `El número máximo es de 50`,
              (value) => parseInt(value!) <= 50
            ),
        })}
      >
        {(formik) => (
          <Form>
            <div className='input-form'>
              <label htmlFor='firstName'>
                Piso en el que se encuentra el departamento
              </label>
              <Field name='floor' type='text' className='text-input' />
              <ErrorMessage name='floor' component='span' />
            </div>
            <div className='d-flex justify-content  my-2'>
              <button
                type='button'
                className='btn-dark'
                onClick={() => navigate('../apartment-address')}
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
