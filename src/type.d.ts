interface IStep {
  id: string;
  step_name: string;
  step_number: number;
  title: string;
  route?: string;
  payload?: Record<string, any>;
  component: any[];
}

type StepsState = {
  steps: IStep[];
  active_step: IStep;
};
// TODO: Add description here
type StepAction = {
  type: string;
  step: IStep;
};

type DispatchType = (args: StepAction) => StepAction;
