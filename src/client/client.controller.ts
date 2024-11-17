import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  createClient(@Body() user: any) {
    const client = this.clientService.createUser(user);
    return client;
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }
}
