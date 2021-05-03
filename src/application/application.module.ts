import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { CustomerMapper } from './mappers/customer.mapper';
import { CustomerController } from './rest/customer.controller';
import { CustomerService } from './services/customer.service';

@Module({
	imports: [DomainModule],
	providers: [CustomerService, CustomerMapper],
	controllers: [CustomerController],
})
export class ApplicationModule {}
