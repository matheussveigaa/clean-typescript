import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import {
	CUSTOMER_REPOSITORY_NAME,
	ICustomerRepository,
} from '../repository/customer.repository';

@Injectable()
export class UpdateCustomerUseCase {
	constructor(
		@Inject(CUSTOMER_REPOSITORY_NAME) private repository: ICustomerRepository,
	) {}

	handle(customer: Customer): Promise<Customer> {
		customer.updatedAt = new Date();
		return this.repository.update(customer);
	}
}
