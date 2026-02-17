import z from "zod";

export const CreateItemSchema = z
  .object({
    name: z.string().min(1, "Please provide item name!"),
    initStock: z
      .number("Provide only number for stock!")
      .min(0, "Please provide non-negative number for stock!"),
    unitId: z.string().min(1, "Please provide item unit"),
  })
  .strict();

export const UpdateItemSchema = CreateItemSchema.refine(
  (data) => Object.keys(data).length > 0,
  "At least one field must be updated",
);
