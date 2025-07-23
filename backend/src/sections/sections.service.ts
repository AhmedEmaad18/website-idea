import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section, SectionDocument } from './sections.schema';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(Section.name) private sectionModel: Model<SectionDocument>,
  ) {}

  async createSections(idea: string) {
    const dummySections = ['Hero', 'About', 'Contact'];
    const createdSections = dummySections.map((name) => ({ name, idea }));
    await this.sectionModel.insertMany(createdSections);
    return { message: 'Sections created' };
  }

  async findAll() {
    return { sections: await this.sectionModel.find().exec() };
  }
}
