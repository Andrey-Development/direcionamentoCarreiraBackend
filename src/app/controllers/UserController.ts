import { Request, Response, Router } from "express";
import UserRepository from "../repositories/UserRepository";
import IUser from "../interfaces/IUser";

const userRouter = Router();

userRouter.get("/", async (_req: Request, res: Response): Promise<Response> => {
  let users = await UserRepository.getUsers();
  return res.status(200).json(users);
});

userRouter.get(
  "/id/:id",
  async (_req: Request, res: Response): Promise<Response> => {
    let { id } = _req.params;
    let user = await UserRepository.getUserById(parseInt(id));
    console.log(_req, user);
    return res.status(200).json(user);
  }
);

userRouter.get(
  "/email/:email",
  async (_req: Request, res: Response): Promise<Response> => {
    let { email } = _req.params;
    let users = await UserRepository.getUserByEmail(email);
    return res.status(200).json(users);
  }
);

userRouter.get(
  "/cpf/",
  async (_req: Request, res: Response): Promise<Response> => {
    let { id, cpf } = _req.body;
    let users = await UserRepository.getUserByCpf(id, cpf);
    return res.status(200).json(users);
  }
);

userRouter.post(
  "/",
  async (_req: Request, res: Response): Promise<Response> => {
    let { id, email, cpf } = _req.body;
    let data: IUser = _req.body;
    // verifica se já existe o usuário
    if (isFinite(id)) {
      // verifica por cpf
      let userCpf = await UserRepository.getUserByCpf(id, cpf);
      if (userCpf)
        return res.status(409).json({
          message:
            "Este CPF já está sendo utilizado! <br>Por favor, fale com um instrutor!",
        });
      // colocando data no formato correto
      data.updated_at = new Date();
      if (data.data_nascimento != null)
        data.data_nascimento = new Date(data.data_nascimento);
      let user = await UserRepository.updateUser(id, data);
      return res.status(200).json(user);
    } else if (data.email != null) {
      // busca os usuarios por email e cpf para ver se existe
      let userEmail = await UserRepository.getUserByEmail(email);
      if (userEmail)
        return res.status(409).json({
          message:
            "Este e-mail já está sendo utilizado! <br>Por favor, fale com um instrutor!",
        });

      let userCpf = await UserRepository.getUserByCpf(id, cpf);
      if (userCpf)
        return res.status(409).json({
          message:
            "Este CPF já está sendo utilizado! <br>Por favor, fale com um instrutor!",
        });

      // colocando data no formato correto
      data.created_at = new Date();
      if (data.data_nascimento != null)
        data.data_nascimento = new Date(data.data_nascimento);
      // save new user
      let user = await UserRepository.saveUser(data);
      if (user) return res.status(200).json(user);
    }

    return res.status(400).json({
      message:
        "Erro ao cadastrar usuário, se o problema persistir fale com um instrutor!",
    });
  }
);

userRouter.delete(
  "/:id",
  async (_req: Request, res: Response): Promise<Response> => {
    const { id } = _req.params;
    const users = await UserRepository.deleteUser(parseInt(id));
    return res.status(200).json(users);
  }
);

export default userRouter;
