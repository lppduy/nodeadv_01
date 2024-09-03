import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), ProductModule,
    AuthModule,
    JwtModule.register({
      global: true
    })],
  controllers: [],
  providers: [],
})
export class AppModule { }
