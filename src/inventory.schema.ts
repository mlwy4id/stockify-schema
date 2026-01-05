import z from "zod";

export const CreateItemSchema = z
  .object({
    name: z.string().min(1, "Please provide item name!"),
    quantity: z
      .number("Provide only number for quantity!")
      .min(0, "Please provide non-negative number for quantity!"),
  })
  .strict();

export const UpdateItemSchema = CreateItemSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  "At least one field must be updated"
);

export type Item = {
  id: string;
  name: string;
  quantity: string;
};

export type CreateItem = z.infer<typeof CreateItemSchema>;
export type UpdateItem = z.infer<typeof UpdateItemSchema>;

export type UpdateItemRequest = {
  id?: string;
  item: UpdateItem;
};
