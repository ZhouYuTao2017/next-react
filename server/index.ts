import express from 'express';
import next from 'next';
import routes from '../routes/index';
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = express()
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
		routes.map((item)=>(
			server.get(item.path, (req, res) => {
        const query=()=>{
          if(typeof req.query ==='string'){
            return req.query
          }else{
            let str='';
            for (var i in req.query){
              str.length?str+=`?${i}=${req.query[i]}`:str+=`&${i}=${req.query[i]}`
            }
          }
          
        }
				return app.render(req, res, '/'+item.page, query())
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