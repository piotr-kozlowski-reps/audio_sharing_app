import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Name must be a string.' })
  @MinLength(5, { message: 'Minimum length is 5 characters.' })
  name: string;

  @IsEmail({}, { message: 'Email must be in proper format.' })
  email: string;

  @IsString({ message: 'password must be a string.' })
  @MinLength(7, { message: 'Password length must be at least 7 characters.' })
  //TODO: validation of min capital, small letters. special chars and numbers
  password: string;

  // @IsBoolean()
  //TODO: default false
  // verified: boolean;

  //TODO: tokens array
  // tokens: string[]

  //TODO: audio array
  // favorites: Audio[];

  //TODO: audio array
  // followers: User[];

  //TODO: audio array
  // followings: User[];
}
