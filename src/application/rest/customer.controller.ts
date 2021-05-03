import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { CreateCustomerDTO } from '../dto/create-customer.dto';
import { CustomerDTO } from '../dto/customer.dto';
import { UpdateCustomerDTO } from '../dto/update-customer.dto';
import { CustomerService } from '../services/customer.service';

@Controller('customers')
export class CustomerController {
	constructor(private customerService: CustomerService) {}

	@Get()
	async findAll(): Promise<CustomerDTO[]> {
		return await this.customerService.findAll();
	}

	@Post()
	async save(@Body() customer: CreateCustomerDTO): Promise<CustomerDTO> {
		return await this.customerService.save(customer);
	}

	@Put()
	async update(@Body() customer: UpdateCustomerDTO): Promise<CustomerDTO> {
		return await this.customerService.update(customer);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<CustomerDTO> {
		return await this.customerService.delete(id);
	}

	@Get(':id')
	async findById(@Param('id') id: string): Promise<CustomerDTO> {
		return await this.customerService.findById(id);
	}
}
