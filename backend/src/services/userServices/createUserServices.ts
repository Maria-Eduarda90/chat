import prismaClient from "../../prisma";
import { sign } from 'jsonwebtoken';

type signUpProps = {
  name: string;
  email: string;
  password: string;
}

type signInProps = {
  email: string;
  password: string;
};

class CreateUserServices {
  async signUp({ name, email, password }: signUpProps) {
    const userExist = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userExist) {
      throw new Error("Já existe um usuário cadastrado com esse email");
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    const token = sign(
      {
        user: {
          name: user.name,
          id: user.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return { token, user };
  }

  async signIn(data: signInProps) {
    const { email, password } = data;
    const existUser = await prismaClient.user.findFirst({
      where: {
        email,
        password,
      },
      include: {
        messages: true,
      },
    });

    if (!existUser) {
      throw new Error('Usuario não encontrado');
    }

    const token = sign(
      {
        user: {
          name: existUser.name,
          id: existUser.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: existUser.id,
        expiresIn: "1d",
      }
    );

    return { token };
  }
}

export { CreateUserServices }