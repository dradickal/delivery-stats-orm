import { Type, Platform, EntityProperty } from '@mikro-orm/core';
export declare class MonetaryType extends Type<string | number, string> {
    getColumnType(prop: EntityProperty, platform: Platform): string;
    compareAsType(): string;
}
