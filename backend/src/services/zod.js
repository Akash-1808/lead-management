import z, { email } from "zod";

const leadSchema = z.object({
    name: z.string().min(2).max(100),
    phoneNumber: z.string().min(10).max(30),
    alternatePhoneNumber: z.string().min(10).max(30).optional(),
    email: z.string().optional(),
    alternateEmail: z.string().optional(),
    status: z.string().min(2).max(100),
    qualification: z.string().min(2).max(100),
    interestedField: z.string().min(2).max(100),
    source: z.string().min(2).max(100),
    assignedTo: z.string().min(2).max(100),
    jobInterest: z.string().min(2).max(100),
    state: z.string().min(2).max(100),
    city: z.string().min(2).max(100),
    passOutYear: z.string().min(4).max(4),
    heardFrom: z.string().min(2).max(100)
});

export { leadSchema };
