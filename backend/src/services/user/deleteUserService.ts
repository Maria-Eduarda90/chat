import prismaClient from "../../prisma"

class DeleteUserService {
    async execute(user_id: string){
        const deleteUser = await prismaClient.user.delete({
            where: {
                id: user_id,
            },
            select: {
                id: true,
            }
        });

        return deleteUser;
    }
}

export { DeleteUserService }