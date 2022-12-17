import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    // @Body('title') title: string,
    // @Body('description') description: string,
    @Body() createBoardDto: CreateBoardDto,
  ): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Query('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }
}
