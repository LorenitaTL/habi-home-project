import StepsDataHumanized from '../presenters/humanized-values';
export const RenderPayload = (props: { payload: any; stepName: string }) => {
  const step_data_humanized = new StepsDataHumanized(props.payload);
  return (
    <p className='text-light'>
      {step_data_humanized.resumePayload(props.stepName)}
    </p>
  );
};
