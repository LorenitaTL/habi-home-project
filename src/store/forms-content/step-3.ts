export const step_3 = [
  {
    title: 'Calle',
    type: 'input',
    name: 'street',
    placeholder: 'Calle',
    value: '',
    validations: [
      {
        type: 'required',
      },
    ],
  },
  {
    title: 'Número',
    type: 'input',
    name: 'number',
    placeholder: '#',
    value: '',
    validations: [
      {
        type: 'required',
      },
    ],
  },
  {
    title: 'Colonia',
    type: 'input',
    name: 'suburb',
    placeholder: 'Colonia',
    value: '',
    validations: [
      {
        type: 'required',
      },
    ],
  },
  {
    title: 'Delegación o municipio',
    type: 'input',
    name: 'municipality',
    placeholder: 'Delegación o municipio',
    value: '',
    validations: [
      {
        type: 'required',
      },
    ],
  },
  {
    title: 'Código Postal',
    type: 'input',
    name: 'postal_code',
    placeholder: 'Código Postal',
    value: '',
    validations: [
      {
        type: 'required',
      },
      {
        type: 'maxLength',
        value: 5,
      },
    ],
  },
];
