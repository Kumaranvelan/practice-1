/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel} from '@nestjs/mongoose';
import {Person} from './persons.interface';


@Injectable()
export class PersonsService {
  constructor(@InjectModel('Person') private readonly personModel: Model<Person>) {}

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  
  async create(newPerson: Person): Promise<Person> {
    // Ensure that payment is always an array
    newPerson.payment = Array.isArray(newPerson.payment) ? newPerson.payment : [newPerson.payment];
  
    const createdPerson = new this.personModel(newPerson);
    return createdPerson.save();
  }
  
  async update(id: string, updatedPerson: Person): Promise<Person> {
    // Ensure that payment is always an array
    updatedPerson.payment = Array.isArray(updatedPerson.payment) ? updatedPerson.payment : [updatedPerson.payment];
  
    return this.personModel.findByIdAndUpdate(id, updatedPerson, { new: true });
  }
  
  async delete(id: string): Promise<void> {
    await this.personModel.findByIdAndDelete(id);
  }
}