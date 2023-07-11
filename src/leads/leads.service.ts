import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Lead } from './entities/lead.entity';
import { Model } from 'mongoose';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class LeadsService {

  constructor( @InjectModel(Lead.name)
                private readonly leadModel: Model<Lead>,
                private readonly mailService: MailService
                ){
  }


 async register(createLeadDto: CreateLeadDto) {

    try {

      const data = {
        ...createLeadDto
      }

      
      const createdNew = await this.leadModel.create(data);


      await this.mailService.sendToNewLead(data.email, data.name, data.phone, data.message)


      return {
        status: true,
        createdNew
      };
      
    } catch (error) {
      this.handleException(error)
    }

  }



  private handleException( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException({
        status: false,
        message: `error al guaardar en la BD`
      });
    }
    console.log(error);
    throw new InternalServerErrorException(`Can´t create user - Check server logs`)
  }

}
