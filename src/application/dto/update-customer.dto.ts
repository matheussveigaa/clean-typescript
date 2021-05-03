import { DocumentDTO } from './document.dto';

export class UpdateCustomerDTO {
	id: string;
	name: string;
	document: DocumentDTO;
}
