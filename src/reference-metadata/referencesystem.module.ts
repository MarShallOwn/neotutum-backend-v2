import { Module } from '@nestjs/common';
import { ReferencesystemController } from './referencesystem.controller';
import { ReferencesystemService } from './referencesystem.service';

@Module({
  controllers: [ReferencesystemController],
  providers: [ReferencesystemService]
})
export class ReferencesystemModule {}
