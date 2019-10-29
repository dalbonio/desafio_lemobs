import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Aluno } from './aluno.entity'

@Entity("endereco")
export class Endereco{
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "rua"})
    rua: string

    @Column({nullable: true, name: "numero"})
    numero: string

    @Column({nullable: true, name: "complemento"})
    complemento: string

    @Column({name: "bairro"})
    bairro: string

    @ManyToOne(type => Aluno, aluno => aluno.enderecos)
    @JoinColumn({name: "aluno_id"})
    aluno: Aluno
}
