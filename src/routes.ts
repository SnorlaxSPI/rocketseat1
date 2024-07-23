import Router from 'express';
import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

const router = Router();

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    educator: 'Ale',
    duration: 10
  });

  return response.send();
}

export { router };