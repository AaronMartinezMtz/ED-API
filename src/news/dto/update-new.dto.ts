import { IsArray, IsBoolean, IsString } from "class-validator"


export class UpdateNewDto{

    @IsString()
    date: string
    
    @IsString()
    title: string

    @IsString()
    body: string
    
    @IsArray()
    images: string[]

    @IsArray()
    labels: string[]

    @IsBoolean()
    isVisible: boolean


}
