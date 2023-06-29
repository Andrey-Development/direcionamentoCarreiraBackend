import User from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";
import { Response, response } from "express";
import { Not } from "typeorm";

const userRepository = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
  return userRepository.find({ withDeleted: false });
};

const getUserById = (id: number): Promise<IUser | null> => {
  return userRepository.findOne({
    where: {
      id: id,
    },
    withDeleted: false,
  });
};

const getUserByEmail = async (email: string): Promise<IUser | null> => {
  return await userRepository.findOne({
    where: {
      email: email,
    },
    withDeleted: false,
  });
};

const getUserByCpf = async (id: number, cpf: string): Promise<IUser | null> => {
  if (cpf != null && id != null) {
    return await userRepository.findOne({
      where: {
        id: Not(id),
        cpf: cpf,
      },
      withDeleted: false,
    });
  } else if (cpf != null) {
    return await userRepository.findOne({
      where: {
        cpf: cpf,
      },
      withDeleted: false,
    });
  }
  return null;
};

const saveUser = async (user: IUser): Promise<IUser> => {
  await userRepository.save(user).catch((e)=>{
    console.log(e);
  });
  return user;
};

const updateUser = async (userId: number, newData: IUser): Promise<IUser> => {
  await userRepository.update(userId, newData);
  return newData;
};

const deleteUser = async (id: number): Promise<boolean> => {
  userRepository.createQueryBuilder().where({ id: id }).softDelete();
  return true;
};

export default {
  getUsers,
  getUserById,
  getUserByEmail,
  getUserByCpf,
  saveUser,
  updateUser,
  deleteUser,
};
