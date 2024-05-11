import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }

  onModuleInit() {
    this.$connect()
  }

  OnModuleDestroy() {
    this.$disconnect()
  }
}
