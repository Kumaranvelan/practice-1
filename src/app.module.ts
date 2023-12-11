import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsModule } from './persons/persons.module';
// import { PersonsController } from 'persons/persons.controller';
// import { PersonsService } from 'persons/persons.service';
// import { AppController } from 'app.controller';
// import { AppService } from 'app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kumaran:cUaelQDwiWCkReJW@cluster1.mcfsfzz.mongodb.net/persondetailsDB',
    ),
    PersonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//
