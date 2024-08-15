import type { Services } from "../../db.ts"

declare global {
    namespace Express {
        interface Request {
            db?: Services
        }
    }
}
