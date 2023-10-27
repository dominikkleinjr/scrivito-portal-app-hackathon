
import  * as Scrivito from 'scrivito'


export const HouseDataClass = Scrivito.provideDataClass("HouseData", {
    connection: {
      get: async (id) => {
        const pisaVersion= await Scrivito.unstable_JrRestApi.fetch(`../pisa-api/house/${id}?user=salesadmin&language=GER`)
        
        return  {
            _id:pisaVersion._id,
            name: pisaVersion.name,
            price:pisaVersion.price.toString(),
            floor:pisaVersion.floor,
            hasGarage: pisaVersion.hasGarage ? 'yes' : 'no',
            hasGarden: pisaVersion.hasGarden ? 'yes' : 'no',
            numberBathrooms: pisaVersion.numberBedrooms.toString(),
            numberBedrooms: pisaVersion.numberBedrooms.toString(),
            sizeHouse: pisaVersion.sizeHouse.toString(),
            sizeLand:pisaVersion.sizeLand.toString(),
            city:pisaVersion.city,
            street:pisaVersion.street,
            streetNumber:pisaVersion.streetNumber,
            description: pisaVersion.description,

        }
      },
  
      index: async (params) => {

       const allHouses= await Scrivito.unstable_JrRestApi.fetch("../pisa-api/housesByRegion/null?user=salesadmin&language=GER")

        return{results: allHouses.map((data)=>({
            _id: data._id,data, 
            name:data.name,
            hasGarage: data.hasGarage ? 'yes' : 'no' ,
            hasGarden: data.hasGarden ? 'yes' : 'no' ,
            numberBathrooms:data.numberBathrooms.toString(),
            numberBedrooms:data.numberBedrooms.toString(),
            floor:data.floor.toString(),
            sizeHouse:data.sizeHouse.toString(),
            sizeLand:data.sizeLand.toString(),
            price:data.price.toString(),
            city:data.city,
            description: data.description,
            streetNumber:data.streetNumber


             }))}; 

      },
  
      create: async (data) => { 
        const getID= await Scrivito.unstable_JrRestApi.fetch("../pisa-api/newHouseId")
    
        const postNewHouse={
            name: data.name,
            price: parseFloat(data.price),
            description: data.description,
            floor: parseInt(data.floor),
            numberBedrooms: parseFloat(data.numberBedrooms),
            numberBathrooms: 2.0,
            sizeHouse: parseFloat(data.sizeHouse),
            sizeLand: parseFloat(data.sizeLand),
            hasGarage: false,
            hasGarden: false,
            city: data.city,
            zip : data.zip,
            street : data.street,
            streetNumber: data.streetNumber,
        }


        const pisaVersion= await Scrivito.unstable_JrRestApi.fetch(`../pisa-api/house/${getID._id}?user=salesadmin&language=GER`,{data:postNewHouse,method:"PUT"})


        return {  _id: getID._id ,pisaVersion}
      },
  

    },
  });