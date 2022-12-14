import { InviteModule } from './modules/invite/invite.module';
import { Medusa } from 'medusa-extender';
import { OrderModule } from './modules/order/order.module';
import { PermissionModule } from './modules/permission/permission.module';
import { ProductModule } from './modules/product/product.module';
import { RoleModule } from './modules/role/role.module';
import { StoreModule } from "./modules/store/store.module";
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import express = require('express');

async function bootstrap() {
    const expressInstance = express();

    await new Medusa(__dirname + '/../', expressInstance).load([
        UserModule,
        AuthModule,
        ProductModule,
        OrderModule,
        StoreModule,
        InviteModule,
        RoleModule,
        PermissionModule,
    ]);

    expressInstance.listen(9000, () => {
        console.info('Server successfully started on port 9000');
    });
}

bootstrap();