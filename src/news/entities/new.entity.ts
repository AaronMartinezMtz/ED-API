import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"


@Schema()
export class News extends Document{

    @Prop({ 
        unique: true,
        index: true
    })
    slug: string

    @Prop({ type: Date })
    date: string

    @Prop({ type: () => String })
    title: string

    @Prop({ type: () => String })
    body: string

    
    @Prop({ type: [{ type: String }]})
    images: string[]

    @Prop({ type: [{ type: String }]})
    labels: string[]

    @Prop({ type: () => Boolean, default: true })
    isVisible: boolean
    
}


export const NewsSchema = SchemaFactory.createForClass( News );


NewsSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object
})
