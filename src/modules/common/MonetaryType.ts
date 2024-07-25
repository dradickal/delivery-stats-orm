import { Type, Platform, EntityProperty, ValidationError } from '@mikro-orm/core';


export class MonetaryType extends Type<string | number, string> {
    getColumnType(prop: EntityProperty, platform: Platform):string {
        
        return platform.getDecimalTypeDeclarationSQL({precision: prop.precision || 4, scale: prop.scale || 2});
    }

    compareAsType():string {
        return 'string';
    }
}
