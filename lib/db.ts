import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
};

export const db = globalThis.prisma || new PrismaClient();

//this small hack allows us to hot reload in development without initializing a new Prisma Client ever time.
//this works because globalThis is not effected by hot reloads.
if (process.env.NODE_ENV != "production") globalThis.prisma = db