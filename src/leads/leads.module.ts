import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { Lead, LeadSchema } from './entities/lead.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from 'src/mail/mail.module';

@Module({
  controllers: [LeadsController],
  providers: [LeadsService],
  imports: [


    ConfigModule,

    MongooseModule.forFeature([
      {
        name: Lead.name,
        schema: LeadSchema
      }
    ]),

    MailModule
  ]
})

export class LeadsModule {}
