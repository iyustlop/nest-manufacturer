import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (req.method === 'GET') console.log('middleware: ' + req.originalUrl);
    if (req.method === 'POST')
      console.log(
        'middleware: ' + req.originalUrl + ' body: ' + JSON.stringify(req.body),
      );
    next();
  }
}
