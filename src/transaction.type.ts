import z from "zod";
import {
  CreateTransactionSchema,
  UpdateTransactionSchema,
} from "./transaction.schema";

enum TransactionType {
  In = "In",
  Out = "Out",
}

export type Transaction = {
  id: string;
  type: TransactionType;
  quantity: string;
  itemId: string;
};

export type CreateTransaction = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransaction = z.infer<typeof UpdateTransactionSchema>;
