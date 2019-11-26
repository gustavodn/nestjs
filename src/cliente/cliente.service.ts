import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { ClienteInterface } from './intefaces/cliente.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClienteService {
    constructor(@InjectModel('Cliente') private readonly clienteModel: Model<ClienteInterface>) { }
    async getAll(): Promise<ClienteInterface[]> {
        return await this.clienteModel.find();
    }

    async create(cliente: ClienteInterface): Promise<ClienteInterface> {
        const nuevoCliente = new this.clienteModel(cliente);
        return await nuevoCliente.save();
    }

    async findOne(id: string): Promise<ClienteInterface> {
        return await this.clienteModel.findOne(id);
    }

    async update(id: string, cliente: ClienteInterface): Promise<ClienteInterface> {
        return await this.clienteModel.findByIdAndupdate(id, cliente, {new: true});
    }

    async delete(id: string): Promise<ClienteInterface> {
        return await this.clienteModel.findByIdAndRemove(id);
    }
}
