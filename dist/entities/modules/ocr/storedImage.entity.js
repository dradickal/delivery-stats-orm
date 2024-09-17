var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, ManyToOne, OptionalProps, PrimaryKey, Property, ref, types } from "@mikro-orm/core";
import { ServiceLabel } from "../common/service.label.entity.js";
import { customAlphabet } from "nanoid";
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 14);
let StoredImages = class StoredImages {
    [OptionalProps];
    uuid = "id-" + nanoid();
    filename;
    filepath;
    originalName;
    associatedDate;
    userDefinedTime;
    uploadDate = new Date();
    service;
    processedDate;
    activityLabel;
    ocrResults;
    constructor(filename, filepath, originalName, associatedDate, userDefinedTime, service) {
        this.filename = filename;
        this.filepath = filepath;
        this.originalName = originalName;
        this.associatedDate = associatedDate;
        this.userDefinedTime = userDefinedTime;
        this.service = ref(service);
    }
};
__decorate([
    PrimaryKey({ type: types.string, length: 17 })
], StoredImages.prototype, "uuid", void 0);
__decorate([
    Property({ type: types.string, length: 50 })
], StoredImages.prototype, "filename", void 0);
__decorate([
    Property({ type: types.string, length: 120 })
], StoredImages.prototype, "filepath", void 0);
__decorate([
    Property({ type: types.string, length: 50 })
], StoredImages.prototype, "originalName", void 0);
__decorate([
    Property({ type: types.date, nullable: true, default: null })
], StoredImages.prototype, "associatedDate", void 0);
__decorate([
    Property({ type: types.time, nullable: true, default: null })
], StoredImages.prototype, "userDefinedTime", void 0);
__decorate([
    Property({ type: types.datetime })
], StoredImages.prototype, "uploadDate", void 0);
__decorate([
    ManyToOne({ entity: () => ServiceLabel, ref: true })
], StoredImages.prototype, "service", void 0);
__decorate([
    Property({ type: types.datetime, nullable: true, default: null })
], StoredImages.prototype, "processedDate", void 0);
__decorate([
    Property({ type: types.string, length: 15, nullable: true, default: null })
], StoredImages.prototype, "activityLabel", void 0);
__decorate([
    Property({ type: types.json, nullable: true })
], StoredImages.prototype, "ocrResults", void 0);
StoredImages = __decorate([
    Entity()
], StoredImages);
export { StoredImages };
