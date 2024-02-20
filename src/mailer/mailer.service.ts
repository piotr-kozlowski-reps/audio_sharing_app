import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './dto/send.email.dto';
import Mail from 'nodemailer/lib/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailerService {
  //
  private readonly logger = new Logger(MailerService.name);
  constructor(private readonly configService: ConfigService) {}

  //
  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('EMAIL_HOST'),
      port: this.configService.get<number>('EMAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
    return transporter;
  }

  //
  async sendEmail(dto: SendEmailDto) {
    const { from, recipients, subject, html, placeholderReplacements } = dto;
    const transporter = this.mailTransport();
    const options: Mail.Options = {
      from: from && {
        name: this.configService.get<string>('APP_NAME'),
        address: this.configService.get<string>('EMAIL_DEFAULT_MAIL_FROM'),
      },
      to: recipients,
      subject,
      html,
    };

    try {
      const result = await transporter.sendMail(options);
      return result;
    } catch (error) {
      this.logger.error(`ERROR: ${error}`);
    }
  }
}
