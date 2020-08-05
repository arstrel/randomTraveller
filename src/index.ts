import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

const initMap = () => {
  const map = new CustomMap('map-container', 450, 400);

  map.addMarker(user);
  map.addMarker(company);
};

window.addEventListener('load', initMap);
