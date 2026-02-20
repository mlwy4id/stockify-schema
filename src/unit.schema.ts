import z from "zod";

export const CreateUnitSchema = z
  .object({
    name: z.string().min(1, "Please provide unit name!"),
    symbol: z.string().min(1, "Please provide unit symbol!"),
  })
  .strict();
