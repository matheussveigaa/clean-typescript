import { Module } from '@nestjs/common';
import { CreateCustomerUseCase } from './use_cases/create-customer.use-case';
import { DeleteCustomerUseCase } from './use_cases/delete-customer.use-case';
import { FindAllCustomersUseCase } from './use_cases/find-all-customers.use-case';
import { FindCustomerByIdUseCase } from './use_cases/find-customer-by-id.use-case';
import { UpdateCustomerUseCase } from './use_cases/update-customer.use-case';

@Module({
	providers: [
		CreateCustomerUseCase,
		FindAllCustomersUseCase,
		FindCustomerByIdUseCase,
		UpdateCustomerUseCase,
		DeleteCustomerUseCase,
	],
	exports: [
		CreateCustomerUseCase,
		FindAllCustomersUseCase,
		FindCustomerByIdUseCase,
		UpdateCustomerUseCase,
		DeleteCustomerUseCase,
	],
})
export class DomainModule {}
