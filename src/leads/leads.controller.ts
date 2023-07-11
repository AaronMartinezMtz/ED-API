import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post('register')
  register(@Body() createLeadDto: CreateLeadDto) {
    return this.leadsService.register(createLeadDto);
  }

  
}
