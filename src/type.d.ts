interface IStep{
    id: string;
    step_name: string;
    step_number: number;
    title: string;
    route?: string;
    payload?: Record<string, any>;
    component: any[];
  }
  
  type StepsState = {
    steps: IStep[]
  }
  
  type StepAction = {
    type: string
    step: IStep
  }
  
  type DispatchType = (args: StepAction) => StepAction