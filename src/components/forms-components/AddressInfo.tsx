import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addStep, setActiveStep } from '../../store/actionCreator';
import { useSelector, shallowEqual } from 'react-redux';
import * as Yup from 'yup';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';

export const AddressInfo: React.FC = () => {
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

  const step = steps.find((step) => step.step_number === 3);
  const next_step = steps.find((step) => step.step_number === 4);
  return (
    <div>
      <h2 className='text-blue'>Dirección del departamento</h2>
      <Formik
        initialValues={{
          street: '',
          number: '',
          suburb: '',
          municipality: '',
          postal_code: '',
        }}
        onSubmit={(values) => {
          const new_step = { ...step!, payload: values };
          activeStep(next_step!);
          saveStep(new_step);
          navigate(`../${next_step!.route}`);
        }}
        validationSchema={Yup.object({
          street: Yup.string().required('Requerido'),
          number: Yup.string().required('Requerido'),
          suburb: Yup.string().required('Requerido'),
          municipality: Yup.string().required('Requerido'),
          postal_code: Yup.string().required('Requerido'),
        })}
      >
        {(formik) => (
          <Form>
            <div className='input-form'>
              <label htmlFor='street'>Calle</label>
              <Field name='street' type='text' className='text-input' />
              <ErrorMessage name='street' component='span' />
            </div>
            <div className='input-form'>
              <label htmlFor='number'>Número</label>
              <Field name='number' type='text' className='text-input' />
              <ErrorMessage name='number' component='span' />
            </div>
            <div className='input-form'>
              <label htmlFor='suburb'>Colonia</label>
              <Field name='suburb' type='text' className='text-input' />
              <ErrorMessage name='suburb' component='span' />
            </div>
            <div className='input-form'>
              <label htmlFor='municipality'>Delegación o Municipio</label>
              <Field name='municipality' type='text' className='text-input' />
              <ErrorMessage name='municipality' component='span' />
            </div>
            <div className='input-form'>
              <label htmlFor='postal_code'>Código Postal</label>
              <Field name='postal_code' type='text' className='text-input' />
              <ErrorMessage name='postal_code' component='span' />
            </div>
            <div className='d-flex justify-content  my-2'>
              <button
                type='button'
                className='btn-dark'
                onClick={() => navigate('../contact-info')}
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
