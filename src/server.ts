import { app } from './app';
import { createCourse } from './routes';

app.listen(process.env.PORT, () => {
  console.log("🚀🚀 Server Started!!");
});

app.get('/', createCourse);