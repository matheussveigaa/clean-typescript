import { Global } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CUSTOMER_REPOSITORY_NAME } from 'src/domain/repository/customer.repository';
import { CustomerRepository } from './persistence/mongodb/repository/customer.repository';
import { CustomerSchema } from './persistence/mongodb/schemas/customer.schema';

@Global()
@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/main', {
			user: 'root',
			pass: 'mongodb',
			authSource: 'admin',
			useFindAndModify: false,
		}),
		MongooseModule.forFeature([
			{ name: 'customer', schema: CustomerSchema, collection: 'customers' },
		]),
	],
	providers: [
		{
			provide: CUSTOMER_REPOSITORY_NAME,
			useClass: CustomerRepository,
		},
	],
	exports: [CUSTOMER_REPOSITORY_NAME],
})
export class InfrastructureModule {}
