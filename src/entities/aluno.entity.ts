import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm";
import { Endereco } from './endereco.entity';

@Entity()
@Unique(['cpf'])
export class Aluno{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    data_nascimento: Date

    @Column()
    cpf: string

    @Column()
    nota: number

    @OneToMany(type => Endereco, endereco => endereco.aluno)
    enderecos: Endereco[];
}
