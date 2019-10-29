import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm";
import { Endereco } from './endereco.entity';

@Entity("aluno")
@Unique(['cpf'])
export class Aluno{
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "nome"})
    nome: string

    @Column({name: "data_nascimento"})
    data_nascimento: Date

    @Column({name: "cpf"})
    cpf: string

    @Column({name: "nota"})
    nota: number

    @OneToMany(type => Endereco, endereco => endereco.aluno)
    enderecos: Endereco[];
}
