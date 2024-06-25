import { Injectable }from "@nestjs/common";

@Injectable()
export class ManufacturerService {

    getManufacturer() {
        return ['Ferrari', 'Porsche', 'Maserati']
    }
}