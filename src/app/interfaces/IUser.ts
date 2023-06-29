interface IUser {
    id?: number;
    email: string;
    nome?: string;
    sobrenome?: string;
    data_nascimento?: Date;
    sexo?: number;
    numero?: string;
    cpf?: string;
    avatar?: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export default IUser;