import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';
import { addStep, setActiveStep } from '../actionCreator';
import * as Yup from 'yup';

export default function PersonalInfo() {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          full_name: '',
        }}
        onSubmit={(values) => {
          console.log(values);
          
        }}
        validationSchema={Yup.object({
          full_name: Yup.string().required('Requerido'),
        })}
      >
        {(formik) => (
          <Form>
            <div className='input-form'>
              <label htmlFor='full_name'>Nombre Completo</label>
              <Field name='full_name' type='text' className='text-input' />
              <ErrorMessage name='full_name' component='span' />
            </div>
            <button type='submit'><Link to="/register/contact-info">Submit</Link></button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
