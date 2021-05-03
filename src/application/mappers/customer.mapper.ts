import { Scope } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Customer } from 'src/domain/entities/customer.entity';
import { Document } from 'src/domain/entities/document.entity';
import { CreateCustomerDTO } from '../dto/create-customer.dto';
import { CustomerDTO } from '../dto/customer.dto';
import { DocumentDTO } from '../dto/document.dto';
import { UpdateCustomerDTO } from '../dto/update-customer.dto';

@Injectable({
	scope: Scope.TRANSIENT,
})
export class CustomerMapper {
	createDTOtoDomain(dto: CreateCustomerDTO): Customer {
		if (!dto) return null;

		const customer = new Customer();

		customer.name = dto.name;

		customer.document = new Document();
		customer.document.number = dto.document.number;
		customer.document.type = dto.document.type;

		return customer;
	}

	updateDTOtoDomain(dto: UpdateCustomerDTO): Customer {
		if (!dto) return null;

		const customer = new Customer();

		customer.id = dto.id;
		customer.name = dto.name;

		customer.document = new Document();
		customer.document.number = dto.document.number;
		customer.document.type = dto.document.type;

		return customer;
	}

	toDTO(customer: Customer): CustomerDTO {
		if (!customer) return null;

		const dto = new CustomerDTO();

		dto.id = customer.id;
		dto.name = customer.name;

		dto.createdAt = customer.createdAt;
		dto.updatedAt = customer.updatedAt;

		dto.document = new DocumentDTO();
		dto.document.number = customer.document.number;
		dto.document.type = customer.document.type;

		return dto;
	}
}
