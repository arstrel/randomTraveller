import { address, name } from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = `${name.firstName()} ${name.lastName()}`;
    this.location = {
      lat: Number(address.latitude()),
      lng: Number(address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h3>
        User Name: ${this.name}
      </h3>
    </div>
    `;
  }
}
