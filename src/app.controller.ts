import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getRoot(): string {
    return this.appService.getRoot();
  }

  @Get('/_ah/warmup')
  appEngineWarmup(): { [key: string]: String } {
    return { warmup: 'Active' }
  }

}