import { useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';
import { addStep, setActiveStep } from '../store/actionCreator';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MyTextField } from './MyTextField';
import CurrencyInput from 'react-currency-input-field';
import * as Yup from 'yup';
export const DynamicForm = (props: {
  stepToRender: IStep;
  nextStep: IStep | undefined;
  previousStep: IStep | undefined;
}) => {
  const initialValues: { [key: string]: any } = {};
  const requiredFields: { [key: string]: any } = {};
  // for (const input of props.stepToRender.component) {
  //   initialValues[input.name] = input.value;

  //   if (!input.validations) continue;

  //   let schema = Yup.string();

  //   for (const rule of input.validations) {
  //     if (rule.type === 'required') {
  //       schema = schema.required('Este campo es requerido');
  //     }

  //     if (rule.type === 'maxLength') {
  //       schema = schema.max(
  //         (rule as any).value,
  //         `Mínimo de ${(rule as any).value} caracteres`
  //       );
  //     }

  //     if (rule.type === 'maxNumber') {
  //       schema = schema.test(
  //         'Menor a 50?',
  //         `El número máximo es de ${rule.value}`,
  //         (value) => parseInt(value!) <= rule.value
  //       );
  //     }

  //     if (rule.type === 'email') {
  //       schema = schema.email(`Revise el formato del email`);
  //     }
  //   }

  //   requiredFields[input.name] = schema;
  // }

  const validationSchema = Yup.object({ ...requiredFields });

  const dispatch: Dispatch<any> = useDispatch();

  const saveStep = (step: IStep) => {
    dispatch(addStep(step));
  };

  const activeStep = useCallback(
    (step: IStep) => dispatch(setActiveStep(step)),
    [dispatch]
  );

  return (
    <div>
      {/* <h1 className='text-blue'>{props.stepToRender.description}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const new_step = { ...props.stepToRender, payload: values };
          saveStep(new_step);
          if (new_step.step_number < 10 && props.nextStep !== undefined) {
            activeStep(props.nextStep);
          }
        }}
      >
        {(formik) => (
          <Form noValidate>
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
                    <div key={index}>
                      <label>
                        <Field type={type} name={name} value={value} />
                        {value}
                      </label>
                      <ErrorMessage name={name} component='span' />
                    </div>
                  );
                } else if (type === 'currency') {
                  return (
                    <div className='input-form' key={index}>
                      <label>{title}</label>
                      <CurrencyInput
                        className='text-input'
                        id='input-example'
                        name={name}
                        placeholder='Please enter a number'
                        prefix='$'
                        defaultValue={0}
                        onValueChange={(value, name) =>
                          formik.setFieldValue(name!, value)
                        }
                      />
                    </div>
                  );
                } else if (type === 'file') {
                  return (
                    <input
                      key={index}
                      name={name}
                      type={type}
                      onChange={(event) => {
                        formik.setFieldValue(
                          event.target.name,
                          event.currentTarget.files![0]
                        );
                      }}
                    />
                  );
                } else {
                  return <></>;
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
      </Formik> */}
    </div>
  );
};
