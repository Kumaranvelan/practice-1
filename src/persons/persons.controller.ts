// persons/persons.controller.ts

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Person } from './persons.interface';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personsService.findAll();
  }

  @Post()
  async create(@Body() newPerson: Person): Promise<Person> {
    return this.personsService.create(newPerson);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedPerson: Person,
  ): Promise<Person> {
    return this.personsService.update(id, updatedPerson);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.personsService.delete(id);
  }
}
