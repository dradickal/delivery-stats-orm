import { Type } from '@mikro-orm/core';
export class MonetaryType extends Type {
    getColumnType(prop, platform) {
        return platform.getDecimalTypeDeclarationSQL({ precision: prop.precision || 6, scale: prop.scale || 2 });
    }
    compareAsType() {
        return 'string';
    }
}
