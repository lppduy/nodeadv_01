import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client-mysql';
// import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaMysqlService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}