const express = require('express')
const server = express()

const { goToPageLanding, goToStudy, goToGiveClasses, saveClasses } = require(`./pages`)

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server
  .use(express.urlencoded({extended: true}))
  .use(express.static("public"))
    .get("/", goToPageLanding)
    .get("/study", goToStudy)
    .get("/give-classes", goToGiveClasses)
    .post("/save-classes", saveClasses)
  .listen(5500)