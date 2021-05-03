import { Customer } from './../entities/customer.entity';

export interface ICustomerRepository {
	save(customer: Customer): Promise<Customer>;
	update(customer: Customer): Promise<Customer>;
	delete(id: string): Promise<Customer>;
	findById(id: string): Promise<Customer>;
	findAll(): Promise<Customer[]>;
}

export const CUSTOMER_REPOSITORY_NAME = 'ICustomerRepository';
