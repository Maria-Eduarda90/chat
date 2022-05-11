import { Router } from 'express';
import { CreateMessageController } from '../controllers/messageController/createMessageController.ts';
import { GetMessagesController } from '../controllers/messageController/getMessagesController';
import { GetProfileUserController } from '../controllers/userController/getProfileUserController';
import { CreateUserController } from '../controllers/userController/createUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

router.post("/signup", new CreateUserController().createSignUp);
router.post("/signin", new CreateUserController().createSignIn);
router.get("/profile", ensureAuthenticated, new GetProfileUserController().handle);

router.get("/messages", new GetMessagesController().handle);
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

export { router }