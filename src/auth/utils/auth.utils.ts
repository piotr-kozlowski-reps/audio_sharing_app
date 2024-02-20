import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthUtils {
  generateOTP(length: number) {
    let otp = '';
    for (let i = 0; i < length; i++) {
      const digit = Math.floor(Math.random() * 10);
      otp += digit;
    }
    return otp;
  }
}
