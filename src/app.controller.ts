import { User } from './user.entity';
import { Body, Controller, Delete, Get, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() name: string): Promise<User>{
    return this.appService.createUser(name)
  }

  @Put()
  updateUser(@Body(ParseIntPipe) id: number, name: string): Promise<User>{
    return this.appService.updateUser(id, name)
  }

  @Get()
  getAllUser(): Promise<User[]> {
    return this.appService.getAll()
  }

  @Get()
  getOneById(@Query('id', ParseIntPipe) id: number): Promise<User>{
    return this.appService.getOneById(id)
  }

  @Delete()
  deleteUser(@Query('id', ParseIntPipe) id: number): Promise<User>{
    return this.appService.deleteUser(id)
  }
}
