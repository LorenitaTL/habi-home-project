import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
export const ParkingInfo = () => {
  return (
    <div>
      <h2 className='text-blue'>Estacionamiento</h2>
      <Formik
        initialValues={{
          parking: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          parking: Yup.string().required('Requerido'),
        })}
      >
        {(formik) => (
          <Form>
            <div className='input-form'>
              <p>¿El departamento cuenta con estacionamiento?</p>
              <label>
                <Field type='radio' name='parking' value='Si' />
                Sí
              </label>
              <label>
                <Field type='radio' name='parking' value='No' />
                No
              </label>
              <ErrorMessage name='parking' component='span' />
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
