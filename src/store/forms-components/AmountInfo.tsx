import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CurrencyInput from 'react-currency-input-field';
export const AmountInfo = () => {
  return (
    <div>
      <h2 className='text-blue'>Costo</h2>
      <Formik
        initialValues={{
          amount: '',
        }}
        onSubmit={(values) => {
          console.log(values);
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
                onClick={
                  () => console.log()
                  // props.previousStep !== undefined
                  //   ? activeStep(props.previousStep)
                  //   : null
                }
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
