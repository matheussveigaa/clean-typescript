import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Customer } from './domain/entities/customer.entity';
import { ICustomerRepository } from './domain/repository/customer.repository';

@Controller('customers')
export class AppController {

  @Inject('ICustomerRepository') 
  private customerRepository: ICustomerRepository;

  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.findAll();
  }

  @Post()
  async save(@Body() customer: Customer): Promise<void> {
    await this.customerRepository.save(customer);
  }

  @Put()
  async update(@Body() customer: Customer): Promise<Customer> {
    return await this.customerRepository.update(customer);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Customer> {
    return await this.customerRepository.delete(id);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Customer> {
    return await this.customerRepository.findById(id);
  } 
}
