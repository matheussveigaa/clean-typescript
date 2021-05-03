import { Document, Schema } from 'mongoose';
import { Customer } from 'src/domain/entities/customer.entity';

export type CustomerDocument = Customer & Document;

export const CustomerSchema = new Schema(
	{
		name: String,
		createdAt: {
			type: Date,
			default: Date.now,
		},
		document: {
			number: {
				type: String,
			},
			type: {
				type: String,
			},
		},
		updatedAt: Date,
	},
	{
		versionKey: false,
	},
);

CustomerSchema.virtual('id').get(function () {
	const idValue = this._id.toHexString();

	return idValue;
});

CustomerSchema.set('toJSON', {
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
	},
});
