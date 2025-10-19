import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, getRepository, Repository } from 'typeorm';
import { Agricultor, IAgricultorDTO } from './agricultorModel.js';

@Entity('agricultores')
export class AgricultorEntity implements Agricultor {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar', length: 255 }) razao_social!: string;
    @Column({ type: 'varchar', length: 255 }) nome_fantasia!: string;
    @Column({ type: 'varchar', length: 18, unique: true }) documento!: string;
    @Column({ type: 'varchar', length: 20, nullable: true }) celular!: string | null;
    @Column({ type: 'varchar', length: 100 }) cidade!: string;
    @Column({ type: 'varchar', length: 2 }) estado!: string;
    @CreateDateColumn({ type: 'timestamp' }) created_at!: Date;
    @UpdateDateColumn({ type: 'timestamp' }) updated_at!: Date;
    @DeleteDateColumn({ type: 'timestamp', nullable: true }) deleted_at!: Date | null;
}

/**
*interface do Repositório define as ações que ele pode executar.
*/
export interface IAgricultorRepository {
    create(data: IAgricultorDTO): Promise<Agricultor>;
    findAll(): Promise<Agricultor[]>;
    findById(id: string): Promise<Agricultor | null>;
    update(id: string, data: Partial<IAgricultorDTO>): Promise<Agricultor | null>;
    delete(id: string): Promise<void>;
    findByDocumentoIncludingDeleted(documento: string): Promise<Agricultor | null>;
}

/**
* Comunicação com o banco para as operações de CRUD
*/
export class AgricultorRepository implements IAgricultorRepository {
    private ormRepository: Repository<AgricultorEntity>;


    constructor(repository: Repository<AgricultorEntity>) {
        this.ormRepository = repository;
    }
    public async create(data: IAgricultorDTO): Promise<Agricultor> {
        const agricultor = this.ormRepository.create(data);
        return this.ormRepository.save(agricultor);
    }

    public async findAll(): Promise<Agricultor[]> {
        return this.ormRepository.find();
    }

    public async findById(id: string): Promise<Agricultor | null> {
        return this.ormRepository.findOne({ where: { id } });
    }

    public async update(id: string, data: Partial<IAgricultorDTO>): Promise<Agricultor | null> {
        await this.ormRepository.update(id, data);
        return this.findById(id);
    }

    public async delete(id: string): Promise<void> {
        await this.ormRepository.softDelete(id);
    }

    public async findByDocumentoIncludingDeleted(documento: string): Promise<Agricultor | null> {
        return this.ormRepository.findOne({
            where: { documento },
            withDeleted: true,
        });
    }
}