import { Router } from 'express';
import { CreateMessageController } from '../controllers/mensagens/createMessageController.ts';
import { GetMessagesController } from '../controllers/mensagens/getMessagesController';
import { DeleteUserController } from '../controllers/user/deleteUserController';
import { GetProfileUserController } from '../controllers/user/getProfileUserController';
import { CreateUserController } from '../controllers/user/userController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post("/signup", new CreateUserController().createSignUp);
router.post("/signin", new CreateUserController().createSignIn);
router.get("/profile", ensureAuthenticated, new GetProfileUserController().handle);
router.delete("/profile/:id", ensureAuthenticated, new DeleteUserController().delete);

router.get("/messages", new GetMessagesController().handle);
// usuario so poderar criar uma mensagem se estiver autenticado
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

export { router }