import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { ClienteSchema } from './cliente/schemas/cliente.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://gustavo:montserrat@cluster0-uydu8.mongodb.net/test?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name: 'Clientes', schema: ClienteSchema}])],
  controllers: [AppController, ClienteController],
  providers: [AppService, ClienteService],
})
export class AppModule {}
