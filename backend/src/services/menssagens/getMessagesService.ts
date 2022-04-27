import prismaClient from "../../prisma"

class GetMessagesService {
    async execute () {
        const message = await prismaClient.message.findMany({
          orderBy: {
            created_at: "desc",
          },
          include: {
            user: true,
          },
        });

        return message;
    }
}

export { GetMessagesService }