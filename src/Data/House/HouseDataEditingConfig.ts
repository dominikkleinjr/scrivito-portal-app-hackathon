import { provideEditingConfig } from 'scrivito'
import { HouseDataClass } from './HouseDataClass'

provideEditingConfig(HouseDataClass, {
  title: 'Houses',
  attributes: {
    price: {title: 'Price'},
    name: {title:"Name"},
    floor: {title:"Number of Flors"},
    hasGarage: {title:"Has garage"},
    hasGarden: {title:"Has garden"},
    numberBathrooms: {title:"Number of bathrooms"},
    numberBedrooms: {title:"Number of bedrooms"},
    sizeHouse: {title:"Size House"},
    sizeLand: {title:"Size land"},
    description: {title:"Description"},
    city:{title:"City"},
    zip : {title:"Zip Code"},
    street :{title:"Street"},
    streetNumber:{title:"Street Number"},

  },
})
