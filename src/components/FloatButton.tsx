import StepsDataHumanized from '../presenters/humanized-values';
export const Float = (props: { payload: any; stepName: string; colorText: string }) => {
  const step_data_humanized = new StepsDataHumanized(props.payload);
  return (
    <p className={props.colorText}>
      {step_data_humanized.resumePayload(props.stepName)}
    </p>
  );
};
