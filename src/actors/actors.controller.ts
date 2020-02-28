import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ActorsService } from './actors.service';

@Controller('actors')
export class ActorsController {
  constructor(private actorsService: ActorsService) {}

  @Get()
  getActors() {
    return this.actorsService.getActors();
  }

  @Get(':id')
  getActor(@Param('id') id: string) {
    const actor = this.actorsService.getActor(id);

    if (actor) {
      return actor;
    } else {
      throw new NotFoundException();
    }
  }
}
