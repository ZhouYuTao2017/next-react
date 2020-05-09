import next from 'next';
import * as URL from 'url';
import routes from '../routes/index';
import http from 'http';
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = express()
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    routes.map((item) => (
      http.createServer((req, res) => {
        var params = URL.parse(req.url, true).query;
        return app.render(req, res, '/' + item.page, params)
      })
    ))
    server.get('*', (req, res) => {
      return handle(req, res)
    })
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
console.log(
  `> Server listening at http://localhost:${port} as ${
  process.env.NODE_ENV
  }`
)