import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { BoardsService } from './boards.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  // @Get()
  // getAllBoards(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }
  // @Post()
  // // 핸들러 레벨 파이프
  // @UsePipes(ValidationPipe)
  // createBoard(
  //   // @Body('title') title: string,
  //   // @Body('description') description: string,
  //   @Body() createBoardDto: CreateBoardDto,
  // ): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }
  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }
  // @Patch('/:id')
  // updateBoard(
  //   @Param('id') id: string,
  //   @Body() updateData: UpdateBoardDto,
  //   // 파라미터 레벨 파이프
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ) {
  //   return this.boardsService.updateBoard(id, updateData, status);
  // }
}
