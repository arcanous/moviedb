import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ActorsService } from './actors.service';

@Controller('actors')
export class ActorsController {
  constructor(private actorsService: ActorsService) {}

  @Get()
  getMovies() {
    return this.actorsService.getActors();
  }

  @Get(':id')
  getActor(@Param('id') id: string) {
    const movie = this.actorsService.getActor(id);

    if (movie) {
      return movie;
    } else {
      throw new NotFoundException();
    }
  }
}
