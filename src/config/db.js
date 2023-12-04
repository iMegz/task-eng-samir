const { PrismaClient } = require("@prisma/client");

const prismaClientSingleton = () => {
  return new PrismaClient();
};

/**
 * @type {PrismaClient}
 */
const prisma = globalThis.prisma ?? prismaClientSingleton();

module.exports = prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
