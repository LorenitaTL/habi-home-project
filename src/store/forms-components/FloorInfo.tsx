import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const FloorInfo = () => {
  return (
    <div>
      <h2 className='text-blue'>Información de Contacto</h2>
      <Formik
        initialValues={{
          floor: '',
        }}
        onSubmit={(values) => {
          console.log(values);
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
