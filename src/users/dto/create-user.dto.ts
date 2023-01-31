import { IsString, IsEmail, IsNumber, Max, Min } from "class-validator";

export class CreateUserDto {
    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsNumber()
    @Min(0)
    @Max(1)
    status: number;
}
