import { Controller, Post, UseGuards, Request, Get} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller()
export class AuthController {
    constructor(private authService:AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('auth/signin')
    login(@Request() req:any){
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req:any) {
    return req.user;
  }
}
