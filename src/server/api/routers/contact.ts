import { z } from "zod";
import nodemailer from "nodemailer";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        phone: z.string().optional(),
        message: z.string().min(5, "Message must be at least 5 characters"),
      }),
    )
    .mutation(async ({ input }) => {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO ?? process.env.EMAIL_USER,
        subject: `New Contact Message from ${input.name}`,
        replyTo: input.email,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Phone:</strong> ${input.phone ?? "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });

      return {
        success: true,
        message: "Message sent successfully",
      };
    }),
});