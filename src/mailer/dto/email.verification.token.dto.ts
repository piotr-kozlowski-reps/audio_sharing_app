import { User } from '@prisma/client';

export type EmailVerificationTokenDto = {
  //TODO: Is User
  owner: User;

  //TODO:
  // @IsString()
  // @Required()
  token: string;

  //TODO:
  // @IsDate()
  //TODO: 3600 =  60min * 60Sec - Expires
  createdAt: Date;
};
