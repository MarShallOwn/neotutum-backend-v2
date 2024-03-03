import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidMetaDataEntityTypeException extends HttpException {
    constructor(message: string = 'Please provide correct metadata entity type', status: HttpStatus = HttpStatus.BAD_REQUEST) {
        super(message, status);
    }
}