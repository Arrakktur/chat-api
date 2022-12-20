import { Body, Controller, Get, Header, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UsersService } from "../services/users.service";
import { User } from "../models/users.model";
import { LoginUserDto } from "../dto/login-user.dto";

@Controller("users")
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.getAllUsers();
  }

  @Get(':login')
  async getById(@Param() dto: LoginUserDto): Promise<User[]> {
    return await this.usersService.getPartUsers(dto);
  }
}