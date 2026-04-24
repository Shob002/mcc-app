import { z } from "zod";
import nodemailer from "nodemailer";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const contactRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        message: z.string().min(1, "Message is required"),
      }),
    )
    .mutation(async ({ input }) => {
      try {
        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
          throw new Error("Gmail environment variables are missing");
        }

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        await transporter.verify();

        await transporter.sendMail({
          from: `"Master Crop Care Website" <${process.env.GMAIL_USER}>`,
          to: process.env.CONTACT_RECEIVER_EMAIL ?? process.env.GMAIL_USER,
          replyTo: input.email,
          subject: `New Contact Message from ${input.name}`,
          text: `
Name: ${input.name}
Email: ${input.email}
Phone: ${input.phone || "Not provided"}

Message:
${input.message}
          `,
          html: `
            <h2>New Contact Message</h2>
            <p><b>Name:</b> ${input.name}</p>
            <p><b>Email:</b> ${input.email}</p>
            <p><b>Phone:</b> ${input.phone || "Not provided"}</p>
            <p><b>Message:</b></p>
            <p>${input.message}</p>
          `,
        });

        return { success: true };
      } catch (error) {
        console.error("EMAIL SEND ERROR:", error);

        const message =
          error instanceof Error ? error.message : "Unknown email error";

        throw new Error(message);
      }
    }),
});