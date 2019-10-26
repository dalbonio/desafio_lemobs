import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Ticket } from './ticket.entity';

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

    @OneToMany(type => Endereco, endereco => endereco.aluno)
    enderecos: Endereco[];
}
