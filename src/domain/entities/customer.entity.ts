import { Document } from './document.entity';

export class Customer {
	id: string;
	name: string;
	document: Document;
	createdAt: Date;
	updatedAt: Date;
}
