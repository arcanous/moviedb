import { Controller, Get, Param, NotFoundException, Put, Delete, BadRequestException, Body, Post } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { Director } from './../app.model';

@Controller('directors')
export class DirectorsController {
  constructor(private directorsService: DirectorsService) {}

  @Get()
  getDirectors() {
    return this.directorsService.getDirectors();
  }

  @Get(':id')
  getDirector(@Param('id') id: string) {
    const director = this.directorsService.getDirector(id);

    if (director) {
      return director;
    } else {
      throw new NotFoundException();
    }
  }

  @Post()
  addDirector(@Body() director: Partial<Director>) {
    const result = this.directorsService.addDirector(director);

    if (result) {
      return result;
    } else {
      throw new BadRequestException();
    }
  }

  @Put(':id')
  updateDirector(@Param('id') id: string, @Body() director: Partial<Director>) {
    const result = this.directorsService.updateDirector(id, director);

    if (result) {
      return result;
    } else {
      throw new BadRequestException();
    }
  }

  @Delete(':id')
  deleteDirector(@Param('id') id: string) {
    const result = this.directorsService.deleteDirector(id);

    if (result) {
      return;
    } else {
      throw new NotFoundException();
    }
  }
}
