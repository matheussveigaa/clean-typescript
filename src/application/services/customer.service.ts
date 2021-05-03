import { Injectable } from '@nestjs/common';
import { CreateCustomerUseCase } from 'src/domain/use_cases/create-customer.use-case';
import { DeleteCustomerUseCase } from 'src/domain/use_cases/delete-customer.use-case';
import { FindAllCustomersUseCase } from 'src/domain/use_cases/find-all-customers.use-case';
import { FindCustomerByIdUseCase } from 'src/domain/use_cases/find-customer-by-id.use-case';
import { UpdateCustomerUseCase } from 'src/domain/use_cases/update-customer.use-case';
import { CreateCustomerDTO } from '../dto/create-customer.dto';
import { CustomerDTO } from '../dto/customer.dto';
import { UpdateCustomerDTO } from '../dto/update-customer.dto';
import { CustomerMapper } from '../mappers/customer.mapper';

@Injectable()
export class CustomerService {
	constructor(
		private createCustomerUseCase: CreateCustomerUseCase,
		private updateCustomerUseCase: UpdateCustomerUseCase,
		private deleteCustomerUseCase: DeleteCustomerUseCase,
		private findAllCustomersUseCase: FindAllCustomersUseCase,
		private findCustomerByIdUseCase: FindCustomerByIdUseCase,
		private customerMapper: CustomerMapper,
	) {}

	async save(createDTO: CreateCustomerDTO): Promise<CustomerDTO> {
		const customerToCreate = this.customerMapper.createDTOtoDomain(createDTO);
		const customerCreated = await this.createCustomerUseCase.handle(
			customerToCreate,
		);

		const dto = this.customerMapper.toDTO(customerCreated);

		return dto;
	}

	async update(updateDTO: UpdateCustomerDTO): Promise<CustomerDTO> {
		const customerToUpdate = this.customerMapper.updateDTOtoDomain(updateDTO);
		const customerUpdated = await this.updateCustomerUseCase.handle(
			customerToUpdate,
		);

		const dto = this.customerMapper.toDTO(customerUpdated);

		return dto;
	}

	async delete(id: string): Promise<CustomerDTO> {
		const customerDeleted = await this.deleteCustomerUseCase.handle(id);

		const dto = this.customerMapper.toDTO(customerDeleted);

		return dto;
	}

	async findById(id: string): Promise<CustomerDTO> {
		const customer = await this.findCustomerByIdUseCase.handle(id);

		const dto = this.customerMapper.toDTO(customer);

		return dto;
	}

	async findAll(): Promise<CustomerDTO[]> {
		const customers = await this.findAllCustomersUseCase.handle();

		const dtos = customers.map((customer) =>
			this.customerMapper.toDTO(customer),
		);

		return dtos;
	}
}
