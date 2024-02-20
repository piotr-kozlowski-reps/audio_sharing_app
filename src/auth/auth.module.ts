import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthUtils } from './utils/auth.utils';

@Module({
  providers: [AuthService, PrismaService, AuthUtils],
  controllers: [AuthController],
})
export class AuthModule {}
