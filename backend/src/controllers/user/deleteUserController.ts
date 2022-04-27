import { Request, Response } from 'express';
import { DeleteUserService } from '../../services/user/deleteUserService';

class DeleteUserController {
    async delete(request: Request, response: Response){
        const { id } = request.params;

        const service = new DeleteUserService();

        const result = await service.execute(id);

        return response.json({ result, message: "usuario deletado com sucesso" });
    }
}

export { DeleteUserController }