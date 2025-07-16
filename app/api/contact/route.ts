import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const {message} = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // your email
            subject: `New message from portfolio contact form`,
            text: `Message:\n${message}`,
        });
        console.log("Send message")
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error)
        throw new Error("Message not sent")
    }
}
