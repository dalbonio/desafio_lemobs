import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Aluno } from './aluno.entity'

@Entity()
export class Endereco{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rua: string

    @Column({nullable: true})
    numero: string

    @Column({nullable: true})
    complemento: string

    @Column()
    bairro: string

    @ManyToOne(type => Aluno, aluno => aluno.enderecos)
    @JoinColumn({name: "aluno_id"})
    aluno: Aluno
}
