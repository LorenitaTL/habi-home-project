import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Stepper = (props: { steps: IStep[] }) => {
  const steps_ordered = props.steps.sort((a, b) =>
    a.step_number > b.step_number ? 1 : -1
  );
  return (
    <div className='stepper'>
      {steps_ordered.map((step) => (
        <div className='step' key={step.id}>
          <div
            className={`${
              step.payload !== undefined ? 'text-blue' : 'text-grey'
            }`}
            style={{ display: 'flex' }}
          >
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                marginRight: '5px',
              }}
            />
            <p className=''>
              {step.step_number}
              <span>. {step.description}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
