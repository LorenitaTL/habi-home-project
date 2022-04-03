export interface StepInterface {
    step_name: string;
    step_number: number;
    title: string;
    route?: string;
    payload?: Record<string, any>;
}