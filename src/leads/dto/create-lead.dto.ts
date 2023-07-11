import { IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";


export class CreateLeadDto {

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    message: string;

    }