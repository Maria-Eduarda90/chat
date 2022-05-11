import prismaClient from "../../prisma"

class GetProfileUserservice {
    async execute(user_id: string){
        const user = await prismaClient.user.findMany({
            where: {
                id: user_id,
            }
        })
        
        if(!user){
            throw new Error('Usuario não encontrado')
        }
        return user
    }
}

export { GetProfileUserservice }