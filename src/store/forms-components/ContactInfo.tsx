import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
export const ContactInfo = () => {
  return (
    <div>
      <h2 className='text-blue'>Información de Contacto</h2>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Requerido').email(),
        })}
      >
        {(formik) => (
          <Form>
            <div className='input-form'>
              <label htmlFor='firstName'>Email</label>
              <Field name='email' type='text' className='text-input' />
              <ErrorMessage name='email' component='span' />
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
