import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { CreateSettingsDto } from './settings.docs';
import { SettingsService } from './settings.service';

@Controller('settings')
@ApiUseTags('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  findAll(): any {
    return this.settingsService.getSettings();
  }

  @Post()
  create(@Body() body: CreateSettingsDto) {
    this.settingsService.createSettingsEntry(body);
  }
}
