import { address, name } from 'faker';

export default class User {
  name: string;
  location: {
    lat: string;
    lng: string;
  };

  constructor() {
    this.name = `${name.firstName()} ${name.lastName()}`;
    this.location = {
      lat: address.latitude(),
      lng: address.longitude(),
    };
  }
}
