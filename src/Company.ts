import { address, company } from 'faker';

export default class Company {
  name: string;
  location: {
    lat: string;
    lng: string;
  };

  constructor() {
    this.name = `${company.companyName()} ${company.companySuffix()}`;
    this.location = {
      lat: address.latitude(),
      lng: address.longitude(),
    };
  }
}
