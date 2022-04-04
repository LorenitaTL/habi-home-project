export const step_4 = [
  {
    title: 'Piso dónde se encuentra el departamento',
    type: 'input',
    name: 'floor',
    placeholder: 'Piso número: ',
    value: '',
    validations: [
      {
        type: 'required',
      },
      {
        type: 'maxNumber',
        value: 50,
      },
    ],
  },
];
