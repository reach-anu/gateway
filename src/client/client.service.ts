import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  createUser(user: any) {
    const client = this.userClient.send('client.createUser', user);
    return client;
  }

  findAll() {
    const client = this.userClient.send('client.findAll', {});
    return client;
  }
}
