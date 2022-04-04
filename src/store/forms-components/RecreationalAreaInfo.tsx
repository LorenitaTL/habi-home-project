import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Field, Form } from 'formik';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
export const RecreationalAreaInfo = () => {
  return (
    <div>
      <h2 className='text-blue'>Información de Contacto</h2>
      <Formik
        initialValues={{
          areas: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            <div className='input-form'>
              <p>
                Si el departamento cuenta con alguna de las siguientes opciones,
                selecciona la casilla:
              </p>
              <label>
                <Field type='checkbox' name='areas' value='Zona BBQ' />
                Zona BBQ
              </label>
              <label>
                <Field type='checkbox' name='areas' value='Salón Comunal' />
                Salón Comunal
              </label>
              <label>
                <Field type='checkbox' name='areas' value='Parque de Juegos' />
                Salón Comunal
              </label>
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
