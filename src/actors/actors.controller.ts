import { Actor } from './../app.model';
import { Controller, Get, Param, NotFoundException, Put, Delete, BadRequestException, Body, Post } from '@nestjs/common';
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

  @Post()
  addActor(@Body() actor: Partial<Actor>) {
    const result = this.actorsService.addActor(actor);

    if (result) {
      return result;
    } else {
      throw new BadRequestException();
    }
  }

  @Put(':id')
  updateActor(@Param('id') id: string, @Body() actor: Partial<Actor>) {
    const result = this.actorsService.updateActor(id, actor);

    if (result) {
      return result;
    } else {
      throw new BadRequestException();
    }
  }

  @Delete(':id')
  deleteActor(@Param('id') id: string) {
    const result = this.actorsService.deleteActor(id);

    if (result) {
      return;
    } else {
      throw new NotFoundException();
    }
  }
}
