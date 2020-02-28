import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { DirectorsService } from './directors.service';

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
}
