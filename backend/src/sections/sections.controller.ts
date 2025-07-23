import { Controller, Get, Post, Body } from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  async create(@Body() body: { idea: string }) {
    return this.sectionsService.createSections(body.idea);
  }

  @Get()
  async findAll() {
    return this.sectionsService.findAll();
  }
}
