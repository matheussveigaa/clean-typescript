import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { Customer } from '../../domain/entities/customer.entity';
import { CustomerService } from '../services/customer.service';

@Controller('customers')
export class CustomerController {
	constructor(private customerService: CustomerService) {}

	@Get()
	async findAll(): Promise<Customer[]> {
		return await this.customerService.findAll();
	}

	@Post()
	async save(@Body() customer: Customer): Promise<void> {
		await this.customerService.save(customer);
	}

	@Put()
	async update(@Body() customer: Customer): Promise<Customer> {
		return await this.customerService.update(customer);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Customer> {
		return await this.customerService.delete(id);
	}

	@Get(':id')
	async findById(@Param('id') id: string): Promise<Customer> {
		return await this.customerService.findById(id);
	}
}
