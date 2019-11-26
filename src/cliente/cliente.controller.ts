import { Controller, Get, Post, Put, Delete, Body, Param, Render } from '@nestjs/common';
import {CrearClienteDto} from './dto/crear-cliente';
import {ClienteService} from './cliente.service';
import {ClienteInterface} from './intefaces/cliente.interface';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) { }

    @Get()
    @Render('index')
    getAll(): Promise<ClienteInterface[]> {
        return this.clienteService.getAll();
    }
    @Post()
    create(@Body() clienteDto: CrearClienteDto): Promise<ClienteInterface> {
        return this.clienteService.create(clienteDto);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() clienteDto: CrearClienteDto): Promise<ClienteInterface> {
    return this.clienteService.update(id, clienteDto);

    }
    @Get(':id')
    findOne(@Param(':id') id: string): Promise<ClienteInterface> {
        return this.clienteService.findOne(id);
    }
    @Delete(':id')
    delete(@Param('id') id: string ): Promise<ClienteInterface> {
        return this.clienteService.delete(id);
    }
}
