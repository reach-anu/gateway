import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLIENT_SERVICE',
        transport: Transport.TCP,
        options: { port: 5001 },
      },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
