// persons/persons.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';

import { PersonSchema } from './persons.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Person', schema: PersonSchema }]),
  ],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
