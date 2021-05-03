import { DocumentDTO } from './document.dto';

export class CustomerDTO {
	id: string;
	name: string;
	document: DocumentDTO;
	createdAt: Date;
	updatedAt: Date;
}
