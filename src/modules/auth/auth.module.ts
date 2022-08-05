import { Module } from "medusa-extender";
import { AuthRouter } from './auth.routes';
import { AuthService } from './auth.service';

@Module({
  imports: [
    AuthService,
    AuthRouter,
  ]
})
export class AuthModule { }