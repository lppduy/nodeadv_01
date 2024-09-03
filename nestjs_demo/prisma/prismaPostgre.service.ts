import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client-postgres';
// import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaPostgreService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}