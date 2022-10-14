import * as mongoose from 'mongoose';

import { enumKeys } from '../const';
import { Network } from '../const';
import { keySchema } from './key.model';
import { Proposal } from './proposal.interface';
import { SignaturePass } from './signaturePass.interface';

const schema = new mongoose.Schema<SignaturePass>({
  network: {
    type: String,
    enum: enumKeys(Network),
    get: (enumValue: string) => Network[enumValue as keyof typeof Network],
    set: (enumValue: Network) => Network[enumValue],
    required: true,
    index: true,
  },

  key: { type: keySchema, required: true, unique: true },

  resourceId: { type: String, required: true, index: true },
  data: { type: String, required: true, index: true },
  signature: { type: String, required: true, index: true },

  txHash: { type: String, required: true, unique: true },
  blockNum: { type: Number, required: true, index: true },
  blockTimestamp: { type: Number, required: true, index: true },
});

schema.set('toJSON', {
  transform: (doc, ret, options) => {
    delete ret.__v;
    delete ret._id;
    return ret;
  },
});

const model = mongoose.model<SignaturePass & mongoose.Document>('SignaturePass', schema);

export default model;
