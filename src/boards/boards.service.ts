import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardStatus } from './board.model';
// 서비스 안에서는 데이터베이스 관련된 로직을 처리
import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateBoard(
    id: string,
    updateBoardDto: UpdateBoardDto,
    status: BoardStatus,
  ): Board {
    const { title, description } = updateBoardDto;
    const board = this.getBoardById(id);
    board.title = title;
    board.description = description;
    board.status = status;
    return board;
  }
}
