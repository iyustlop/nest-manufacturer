import { Injectable }from "@nestjs/common";

@Injectable()
export class ManufacturerService {

    private manufacturers = [
        {
            id: 1,
            manufacturer: 'Ferrari',
            location: 'Modena'
        },
        {
            id: 2,
            manufacturer: 'Porsche',
            location: 'Stuttgart'
        },
        {
            id: 3,
            manufacturer: 'Maserati',
            location: 'Modena'
        }
    ]

    getManufacturer() {
        return this.manufacturers;
    }
}