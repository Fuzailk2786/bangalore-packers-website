import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const leadSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  originCity: z.string().min(2, "Origin location is required"),
  destinationCity: z.string().min(2, "Destination location is required"),
  moveDate: z.string().transform((str) => new Date(str)),
  moveType: z.enum(),
  cargoDescription: z.string().optional(),
  volumeEstimate: z.string().optional(),
  isVehicleIncluded: z.boolean().default(false)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation using Zod
    const validatedData = leadSchema.parse(body);

    // Save lead to database via Prisma ORM
    const newLead = await prisma.lead.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        originCity: validatedData.originCity,
        destinationCity: validatedData.destinationCity,
        moveDate: validatedData.moveDate,
        moveType: validatedData.moveType,
        cargoDescription: validatedData.cargoDescription || null,
        volumeEstimate: validatedData.volumeEstimate || null,
        isVehicleIncluded: validatedData.isVehicleIncluded,
        status: "NEW"
      }
    });

    // Simulate Email and SMS triggers for operational dispatch
    // In a production environment, integrate with Nodemailer, Twilio, or SendGrid here
    console.log(`Operational Dispatch Triggered: Lead Ingested with ID ${newLead.id}`);

    return NextResponse.json({ 
      success: true, 
      message: "Lead captured successfully", 
      leadId: newLead.id 
    }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors 
      }, { status: 400 });
    }

    console.error("Critical Database Ingestion Error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Internal server processing failure" 
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
