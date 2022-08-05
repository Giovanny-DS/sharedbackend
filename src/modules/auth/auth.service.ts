
import { Service } from "medusa-extender";
import { AuthService as MedusaAuthService } from '@medusajs/medusa/dist/services';


@Service({ scope: 'SCOPED', override: MedusaAuthService })
export class AuthService extends MedusaAuthService {
}