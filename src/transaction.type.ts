import z from "zod";
import { CreateTransactionSchema } from "./transaction.schema";
import { UpdateItemSchema } from "./inventory.schema";

export type Transaction = {
  type: string;
  quantity: string;
  itemId: string;
};

export type CreateTransaction = z.infer<typeof CreateTransactionSchema>;
export type UpdateTransaction = z.infer<typeof UpdateItemSchema>;
