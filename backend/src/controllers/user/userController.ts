import { Request, Response } from "express";
import { CreateUserServices } from "../../services/user/createUserServices";

class CreateUserController {
  async createSignUp(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const service = new CreateUserServices();

    try {
      const result = await service.signUp({ name, email, password });
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }

  async createSignIn(request: Request, response: Response) {
    const service = new CreateUserServices();
    try {
      const result = await service.signIn(request.body);
      return response.json(result);
    } catch (err) {
      return response.json({ error: err.message });
    }
  }
}

export { CreateUserController };
