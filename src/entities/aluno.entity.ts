import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Endereco } from './endereco.entity';

@Entity()
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
