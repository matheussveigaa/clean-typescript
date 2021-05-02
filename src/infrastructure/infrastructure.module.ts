import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerRepository } from "./persistence/mongodb/repository/customer.repository";
import { CustomerSchema } from "./persistence/mongodb/schemas/customer.schema";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/main', {
            user: "root",
            pass: "mongodb",
            authSource: 'admin',
            useFindAndModify: false
        }), 
        MongooseModule.forFeature([{ name: 'customer', schema: CustomerSchema, collection: 'customers' }])
    ],
    providers: [
        {
            provide: 'ICustomerRepository',
            useClass: CustomerRepository
        }
    ],
    exports: [
        {
            provide: 'ICustomerRepository',
            useClass: CustomerRepository
        }
    ],
})
export class InfrastructureModule {

}