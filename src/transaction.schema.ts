import z from "zod";

const Type = ["In", "Out"] as const;

export const CreateTransactionSchema = z
  .object({
    type: z.enum(Type),
    quantity: z
      .number()
      .min(0, "Please provide non-negative number for quantity"),
    itemId: z.string().min(1, "Please provide item ID"),
  })
  .strict();

const UpdateTransaction = CreateTransactionSchema.extend({
  previousItemId: z.string().min(1, "Please provide previous item ID"),
});

export const UpdateTransactionSchema = UpdateTransaction.partial().refine(
  (data) => Object.keys(data).length > 0,
  "At least one field must be updated"
);
