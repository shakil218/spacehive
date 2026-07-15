import { z } from "zod";

export const createSpaceSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters").max(100, "Title cannot exceed 100 characters"),
  shortDescription: z.string().trim().min(10, "Short description is required").max(200, "Short description cannot exceed 200 characters"),
  description: z.string().trim().min(20, "Description must be at least 20 characters"),
  imageUrl: z.string().url("Invalid URL").or(z.literal("")).optional(),
  category: z.string().min(1, "Please select a category"),
  location: z.string().trim().min(2, "Location is required"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  capacity: z.coerce.number().int("Capacity must be a whole number").min(1, "Capacity must be at least 1"),
  availableFrom: z.string().min(1, "Please select an available date"),
  hostName: z.string().trim().min(2, "Host name is required"),
  amenities: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  status: z.string().default("pending"),
});

export type CreateSpaceFormData = z.infer<typeof createSpaceSchema>;