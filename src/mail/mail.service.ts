import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  
  constructor(private mailerService: MailerService,
              private configService: ConfigService ) {}

              

  async sendToNewLead(mail: string, name: string, phone: string, message: string) {

    await this.mailerService.sendMail({
      to: mail,
      subject: 'Educacion a distancia - TecNM | Campus Cancun',
      template: 'toLead',
      context: { 
        name:name,
        
      },
    });


      await this.mailerService.sendMail({
        to: 'josmart13579@gmail.com',
        subject: 'Nuevo Lead | Educacion a distancia - TecNM | Campus Cancun',
        template: 'toMe',
        context: { 
          name:name,
          email:mail,
          phone: phone,
          message: message 
        },
      });


      return true;


  }






  

}

// ./../user/user.entity
export interface User {
  email?: string;
  contact?: any;
  name?: string;
  userName?: string;
  password?: string;
}