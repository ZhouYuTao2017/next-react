import next from 'next';
import {parse} from 'url';
import routes from '../routes/index';
import { createServer } from 'http';
import http from 'http';
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app :any= next({ dev })

const handle = app.getRequestHandler(app)

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl
    const route=routes.filter((item)=>item.path===pathname)[0];
    if(route?.page){
      app.render(req, res, '/'+route?.page, query)
    }else{
      handle(req, res);
    }
  }).listen(port,()=>{
    console.log(`> Ready on http://localhost:${port}`)
  });
});