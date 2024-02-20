import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './dto/send.email.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('/send-email')
  async sendEmail(@Body() body: Record<string, string>) {
    const dto: SendEmailDto = {
      from: { name: 'Lucy', address: 'kuku@kuku.pl' },
      recipients: [{ name: 'Janek', address: 'janek@janek.com' }],
      subject: 'You won!',
      html: '<h1>123456</h1><p>Cheers</p>',
      placeholderReplacements: body,
    };

    return await this.mailerService.sendEmail(dto);
  }
}
