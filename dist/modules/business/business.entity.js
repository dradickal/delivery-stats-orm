var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryKey, Property, types } from "@mikro-orm/core";
let Business = class Business {
    id;
    name;
    address;
    street;
    crossStreet;
    label;
};
__decorate([
    PrimaryKey()
], Business.prototype, "id", void 0);
__decorate([
    Property({ type: types.string, length: 100 })
], Business.prototype, "name", void 0);
__decorate([
    Property({ type: types.string, length: 150 })
], Business.prototype, "address", void 0);
__decorate([
    Property({ type: types.string, length: 40 })
], Business.prototype, "street", void 0);
__decorate([
    Property({ type: types.string, length: 40 })
], Business.prototype, "crossStreet", void 0);
__decorate([
    Property({
        type: types.string,
        length: 200,
        generated: cols => `(CONCAT(\`${cols.name}\`, ' (', \`${cols.street}\`, ' and ', \`${cols.crossStreet}\`, ' )')) stored`
    })
], Business.prototype, "label", void 0);
Business = __decorate([
    Entity()
], Business);
export { Business };
;
