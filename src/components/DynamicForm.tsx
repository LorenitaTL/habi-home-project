import { useCallback } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';
import {addStep} from '../store/actionCreator';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MyTextField } from './MyTextField';

// TODO: Add validations

export const DynamicForm = (props: { step: IStep }) => {
  const initialValues: { [key: string]: any } = {};
  for (const input of props.step.component) {
    initialValues[input.name] = input.value;
  }

  const dispatch: Dispatch<any> = useDispatch()

  const saveStep = useCallback(
    (step: IStep) => dispatch(addStep(step)),
    [dispatch]
  )

  return (
    <div>
      <h1 className='text-blue'>{props.step.title}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          const newStep = {...props.step, payload: values};
          console.log(newStep);
          saveStep(newStep);
        }}
      >
        {(formik) => (
          <Form>
            {props.step.component.map(
              ({ type, name, placeholder, title }) => {
                return (
                  <MyTextField
                    key={name}
                    type={type as any}
                    name={name}
                    label={title}
                    placeholder={placeholder}
                  />
                );
              }
            )}
            <div className="d-flex justify-content  my-2">
              <button type='button' className="btn-dark">
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
              <button type='submit' className="btn-blue">
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
