import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './input/create.user.dto';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(private readonly db: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password } = createUserDto;

    const newUser: Prisma.UserCreateInput = {
      name,
      email,
      password,
    };

    const userCreated = await this.db.user.create({ data: newUser });
    this.logger.log('User created: ', userCreated);

    return userCreated;
  }
}
