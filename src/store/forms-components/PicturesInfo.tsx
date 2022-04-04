import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form } from 'formik';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
export const PicturesInfo = () => {
  return (
    <div>
      <h2 className='text-blue'>Información de Contacto</h2>
      <Formik
        initialValues={{
          photo: '',
        }}
        onSubmit={(values) => {
          console.log(values);
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
