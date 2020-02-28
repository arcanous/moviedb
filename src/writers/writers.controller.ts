import { Controller, Get, Param, NotFoundException, Put, Delete, BadRequestException, Body, Post } from '@nestjs/common';
import { WritersService } from './writers.service';
import { Writer } from './../app.model';

@Controller('writers')
export class WritersController {
  constructor(private writersService: WritersService) {}

  @Get()
  getWriters() {
    return this.writersService.getWriters();
  }

  @Get(':id')
  getWriter(@Param('id') id: string) {
    const writer = this.writersService.getWriter(id);

    if (writer) {
      return writer;
    } else {
      throw new NotFoundException();
    }
  }

  @Post()
  addWriter(@Body() writer: Partial<Writer>) {
    const result = this.writersService.addWriter(writer);

    if (result) {
      return result;
    } else {
      throw new BadRequestException();
    }
  }

  @Put(':id')
  updateWriter(@Param('id') id: string, @Body() writer: Partial<Writer>) {
    const result = this.writersService.updateWriter(id, writer);

    if (result) {
      return result;
    } else {
      throw new BadRequestException();
    }
  }

  @Delete(':id')
  deleteWriter(@Param('id') id: string) {
    const result = this.writersService.deleteWriter(id);

    if (result) {
      return;
    } else {
      throw new NotFoundException();
    }
  }
}
