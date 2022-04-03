export default class StepsDataHumanized {
  private payload: any;

  public constructor(payload: any) {
    this.payload = payload;
  }

  get full_name(): string {
    return this.payload.full_name;
  }

  get contact(): string {
    return this.payload.email;
  }

  get address(): string {
    return `Calle ${this.payload.street} #${this.payload.number}, ${this.payload.suburb}, ${this.payload.municipality}, C.P. ${this.payload.postal_code}`;
  }

  get floor(): string {
    return `Piso número: ${this.payload.floor}`;
  }

  get recreational_area(): string {
    if (!!this.payload.areas){
      return `El departamento cuenta con: ${this.payload.areas.map((area: any) => area)}`;
    }
    return '';
    
  }
  get parking(): string {
    // TODO: Indicar si está techado
    return `${this.payload.parking}`;
  }

  get amount(): string {
    return `$${this.payload.amount} MXN`;
  }

  get photo(): string {
    // TODO: Completar get
    return '';
  }

  get elevator(): string {
    return `${this.payload.parking ? 'Sí' : 'No'}`;
  }

  resumePayload = (step_name: string) => {
    switch (step_name) {
      case 'personal_info':
        return this.full_name;

      case 'contact_info':
        return this.contact;

      case 'apartment_address':
        return this.address;

      case 'floor_number':
        return this.floor;

      case 'recreational_area':
        return this.recreational_area;

      case 'parking':
        return this.parking;

      case 'amount':
        return this.amount;

      case 'pictures':
        return this.photo;

      case 'elevator':
        return this.elevator;

      default:
        break;
    }
  };
}
