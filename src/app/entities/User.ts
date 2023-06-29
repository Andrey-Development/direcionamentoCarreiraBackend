import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    DeleteDateColumn  
} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column('varchar', { length: 100, nullable: true, unique: true })
    email: string;

    @Column('varchar', { length: 100, nullable: true })
    nome: string;

    @Column('varchar', { length: 100, nullable: true })
    sobrenome: string;
    
    @Column('date', { nullable: true })
    data_nascimento: Date;
    
    @Column('int', { nullable: true })
    sexo: number;
    
    @Column('varchar', { length: 11, nullable: true })
    numero: string;
    
    @Column('varchar', { length: 11, nullable: true, unique: true })
    cpf: string;
    
    @Column('text', { nullable: true })
    avatar: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}

export default User;