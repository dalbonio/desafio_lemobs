import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Aluno } from './aluno.entity'

@Entity()
export class Endereco{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rua: string

    @Column()
    numero: string

    @Column()
    complemento: string

    @Column()
    bairro: string

    @ManyToOne(type => Aluno, aluno => aluno.enderecos)
    aluno: Aluno
}
