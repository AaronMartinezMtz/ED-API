
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Lead extends Document {

  

    @Prop({ type: () => String })
    name: string


    @Prop({ type: () => String })
    email: string

    @Prop({ type: () => String })
    phone: string

    @Prop({ type: () => Boolean, default: true })
    message: string
}


export const LeadSchema = SchemaFactory.createForClass( Lead );


LeadSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object
})
