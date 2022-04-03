import { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';
import { addStep, setActiveStep } from '../store/actionCreator';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MyTextField } from './MyTextField';

// TODO: Add validations

export const DynamicForm = (props: {
  stepToRender: IStep;
  nextStep: IStep | undefined;
  previousStep: IStep | undefined;
}) => {
  const initialValues: { [key: string]: any } = {};
  console.log('Initial Values', initialValues);
  for (const input of props.stepToRender.component) {
    initialValues[input.name] = input.value;
  }

  const dispatch: Dispatch<any> = useDispatch();

  const saveStep = useCallback(
    (step: IStep) => dispatch(addStep(step)),
    [dispatch]
  );

  const activeStep = useCallback(
    (step: IStep) => dispatch(setActiveStep(step)),
    [dispatch]
  );

  return (
    <div>
      <h1 className='text-blue'>{props.stepToRender.title}</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          const new_step = { ...props.stepToRender, payload: values };
          console.log('New step: ', new_step);
          saveStep(new_step);
          if (new_step.step_number < 10 && props.nextStep !== undefined) {
            activeStep(props.nextStep);
          }
        }}
      >
        {(formik) => (
          <Form>
            {props.stepToRender.component.map(
              ({ type, name, placeholder, title, value }, index) => {
                if (type === 'input' || type === 'email') {
                  return (
                    <MyTextField
                      key={name}
                      type={type as any}
                      name={name}
                      label={title}
                      placeholder={placeholder}
                    />
                  );
                } else if (type === 'checkbox' || type === 'radio') {
                  return (
                    <label key={index}>
                      <Field type={type} name={name} value={value} />
                      {value}
                    </label>
                  );
                }
              }
            )}
            <div className='d-flex justify-content  my-2'>
              <button
                type='button'
                className='btn-dark'
                onClick={() =>
                  props.previousStep !== undefined
                    ? activeStep(props.previousStep)
                    : null
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
