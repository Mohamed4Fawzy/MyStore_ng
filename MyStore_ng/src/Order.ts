import { Product } from "./Product";
import { UserInfo } from "./UserInfo";

export class Order {
    products: Product[];
    UserInfo: UserInfo;

    constructor() {
        this.products = [];
        this.UserInfo = new UserInfo();
    }
}