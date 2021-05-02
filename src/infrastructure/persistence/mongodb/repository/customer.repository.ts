import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Customer } from "src/domain/entities/customer.entity";
import { ICustomerRepository } from "src/domain/repository/customer.repository";
import { CustomerDocument } from "../schemas/customer.schema";

@Injectable()
export class CustomerRepository implements ICustomerRepository {

    constructor(
        @InjectModel('customer') private customerModel: Model<CustomerDocument> 
    ) {}

    save(customer: Customer): Promise<Customer> {
        const createdCustomer = new this.customerModel(customer);

        return createdCustomer.save();
    }

    update(customer: Customer): Promise<Customer> {
        const updatedCustomer = this.customerModel.findByIdAndUpdate(customer.id, customer);
        
        return updatedCustomer.exec();
    }

    delete(id: string): Promise<Customer> {
        const deletedCustomer = this.customerModel.findByIdAndDelete(id);

        return deletedCustomer.exec();
    }

    findById(id: string): Promise<Customer> {
        const customerFound = this.customerModel.findById(id);

        return customerFound.exec();
    }

    findAll(): Promise<Customer[]> {
        return this.customerModel.find().exec();
    }

}