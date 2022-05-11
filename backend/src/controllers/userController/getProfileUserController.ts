import { Request, Response} from 'express';
import { GetProfileUserservice } from '../../services/userServices/getProfileUserService';

class GetProfileUserController {
    async handle(request: Request, response: Response){
        const service = new GetProfileUserservice();

        const result = await service.execute(request.user_id);

        return response.json(result)
    }
}

export { GetProfileUserController }