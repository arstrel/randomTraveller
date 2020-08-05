import { address, company } from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = `${company.companyName()} ${company.companySuffix()}`;
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: Number(address.latitude()),
      lng: Number(address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      ${this.name}
      </br>
      ${this.catchPhrase}
    </div>
    `;
  }
}
