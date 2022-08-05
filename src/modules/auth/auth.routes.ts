import { Router } from 'medusa-extender';
import getSessionHandler from './handlers/get-session';
import wrapHandler from '@medusajs/medusa/dist/api/middlewares/await-middleware';

@Router({
  routes: [
    {
      requiredAuth: true,
      path: '/admin/auth/',
      method: 'get',
      handlers: [wrapHandler(getSessionHandler)],
    },
  ],
})
export class AuthRouter {
}
