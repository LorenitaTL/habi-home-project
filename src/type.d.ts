interface IStep {
  id: string;
  description: string;
  step_name: string;
  step_number: number;
  route?: string;
  payload?: Record<string, any>;
  component: React.FC | JSX.Element;
}

type StepsState = {
  steps: IStep[];
  active_step: IStep;
};
type StepAction = {
  type: string;
  step: IStep;
};

type DispatchType = (args: StepAction) => StepAction;
