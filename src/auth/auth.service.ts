import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ){}

    async signup(username: string, email: string, password: string, status: number){
        // check if email is in use
        const user = await this.usersService.findByEmail(email);

        if(user){
            throw new BadRequestException('email already use');
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await this.usersService.create(username, email, hashedPassword, status);

        return newUser;
    }

    async validateUser(email:string, password:string) {
        const user = await this.usersService.findByEmail(email);
        const isMatch = await bcrypt.compare(password, user.password);
            if(user && isMatch){
                return user;
            }           
        
        return null;
    }

    async login(user:any){
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
