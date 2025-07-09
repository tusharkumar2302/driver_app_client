import Hatchback from '../assets/images/icons/Hatchback';
import Minivan from '../assets/images/icons/Minivan';
import Pickup from '../assets/images/icons/Pickup';
import Sedan from '../assets/images/icons/Sedan';
import SportCar from '../assets/images/icons/SportCar';
import SUV from '../assets/images/icons/SUV';
import { CAR_TYPE_STRINGS } from './carTypeStrings';

export const CarTypes = [
  { name: CAR_TYPE_STRINGS.carType.sedan, Icon: Sedan },
  { name: CAR_TYPE_STRINGS.carType.suv, Icon: SUV },
  { name: CAR_TYPE_STRINGS.carType.minivan, Icon: Minivan },
  { name: CAR_TYPE_STRINGS.carType.hatchback, Icon: Hatchback },
  { name: CAR_TYPE_STRINGS.carType.pickup, Icon: Pickup },
  { name: CAR_TYPE_STRINGS.carType.sportcar, Icon: SportCar },
];
