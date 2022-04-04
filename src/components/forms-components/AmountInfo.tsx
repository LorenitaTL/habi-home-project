import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addStep, setActiveStep } from '../../store/actionCreator';
import { useSelector, shallowEqual } from 'react-redux';
import * as Yup from 'yup';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CurrencyInput from 'react-currency-input-field';
import { useCallback } from 'react';
export const AmountInfo:React.FC = () => {
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

  const step = steps.find((step) => step.step_number === 7);
  const next_step = steps.find((step) => step.step_number === 8);
  return (
    <div>
      <h2 className='text-blue'>Costo</h2>
      <Formik
        initialValues={{
          amount: '',
        }}
        onSubmit={(values) => {
          const new_step = { ...step!, payload: values };
          activeStep(next_step!);
          saveStep(new_step);
          navigate(`../${next_step!.route}`);
        }}
        validationSchema={Yup.object({
          amount: Yup.string().required('Requerido').min(2),
        })}
      >
        {(formik) => (
          <Form>
            <div className='input-form'>
              <label>Costo del departamento</label>
              <CurrencyInput
                className='text-input'
                id='input-example'
                name='amount'
                placeholder='Please enter a number'
                prefix='$'
                defaultValue={0}
                onValueChange={(value, name) =>
                  formik.setFieldValue(name!, value)
                }
              />
              <ErrorMessage name="amount" component='span'/>
            </div>
            <div className='d-flex justify-content  my-2'>
              <button
                type='button'
                className='btn-dark'
                onClick={() => navigate('../parking')}
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
