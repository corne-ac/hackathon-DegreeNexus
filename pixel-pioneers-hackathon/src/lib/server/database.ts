const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function getUsers() {
    return await prisma.User.findMany();
}

module.exports = {getUsers};
