export default class StepsDataHimanized {
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
      return `Piso número: ${this.payload.floor}`
  }

  get recreational_area(): string {
      // TODO: Completar este get
    return `El departamento cuenta con: ${this.payload.floor}`
}
get parking(): string {
    // TODO: Indicar si está techado
    return `${this.payload.parking?'Sí':'No'}`
}

get amount(): string {
    return `$${this.payload.amount} MXN`;
}

get photo(): string{
    // TODO: Completar get
    return '';
}

get elevator(): string {
    return `${this.payload.parking?'Sí':'No'}`
}

}
