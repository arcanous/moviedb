import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { WritersService } from './writers.service';

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
}
