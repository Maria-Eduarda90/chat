import { Request, Response } from "express";
import { GetMessagesService } from '../../services/menssagens/getMessagesService';

class GetMessagesController {
  async handle(request: Request, response: Response) {
      const service = new GetMessagesService();

      const result = await service.execute();

      return response.json(result);
  }
}

export { GetMessagesController };
