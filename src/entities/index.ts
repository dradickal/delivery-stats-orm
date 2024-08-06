import { Business } from "./modules/business/business.entity.js";
import { ServiceLabel } from "./modules/common/service.label.entity.js";
import { Weekday } from "./modules/common/weekday.label.entity.js";
import { ActivityLabel } from "./modules/ocr/activity.label.entity.js";
import { StoredImages } from "./modules/ocr/storedImage.entity.js";
import { Destination } from "./modules/offer/destination.label.entity.js";
import { Offer } from "./modules/offer/offer.timed.entity.js";
import { OfferDrive } from "./modules/offer/offerDrive.timed.entity.js";
import { OfferOrder } from "./modules/offer/offerOrder.entity.js";
import { OfferStatus } from "./modules/offer/offerStatus.label.entity.js";
import { DrivingShift } from "./modules/shift/drivingShift.timed.entity.js";
import { ScheduledShift } from "./modules/shift/scheduledShift.timed.entity.js";
import { ShiftPause } from "./modules/shift/shiftPause.timed.entity.js";
import { VehicleStats } from "./modules/vehicle/vehicleStats.entity.js";

export default {
    Business,
    ServiceLabel,
    Weekday,
    ActivityLabel,
    StoredImages,
    Destination,
    Offer,
    OfferDrive,
    OfferOrder,
    OfferStatus,
    DrivingShift,
    ScheduledShift,
    ShiftPause,
    VehicleStats,
}