import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import {
	CUSTOMER_REPOSITORY_NAME,
	ICustomerRepository,
} from '../repository/customer.repository';

@Injectable()
export class FindCustomerByIdUseCase {
	constructor(
		@Inject(CUSTOMER_REPOSITORY_NAME) private repository: ICustomerRepository,
	) {}

	handle(id: string): Promise<Customer> {
		return this.repository.findById(id);
	}
}
