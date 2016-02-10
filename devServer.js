/* eslint-disable no-var */
require('babel-core/register'); // so we can use babel for other files except this file.

// TODO: integrate with webpackDevServer in this file
// For now, to start dev:
// node node_modules/webpack-dev-server/bin/webpack-dev-server.js --config ./webpack.config.dev.js

const Koa = require('koa')
// const convert = require('koa-convert')

// const webpackDevServer = require('koa-webpack-dev');
// const configFilePath = './webpack.config.dev';
// const webpackConfig = require(configFilePath);

// const app = new Koa();

// app.use(convert(webpackDevServer({
//   config: configFilePath2
// })));




// // trust proxy
// app.proxy = true

// // sessions
// const session = require('koa-generic-session')
// app.keys = ['your-session-secret']
// app.use(convert(session()))

// // body parser
// const bodyParser = require('koa-bodyparser')
// app.use(bodyParser())

// // authentication
// require('./server/libs/auth')
// const passport = require('koa-passport')
// app.use(passport.initialize())
// app.use(passport.session())

// // routes
// const fs    = require('fs')
// const route = require('koa-route')

// app.use(route.post('/custom', function(ctx, next) {
//   return passport.authenticate('local', function(user, info, status) {
//     if (user === false) {
//       ctx.status = 401
//       ctx.body = { success: false }
//     } else {
//       ctx.body = { success: true }
//       return ctx.login(user)
//     }
//   })(ctx, next)
// }))

// // POST /login
// app.use(route.post('/login',
//   passport.authenticate('local', {
//     successRedirect: '/app',
//     failureRedirect: '/'
//   })
// ))

// app.use(route.get('/logout', function(ctx) {
//   ctx.logout()
//   ctx.redirect('/')
// }))

// app.use(route.get('/auth/facebook',
//   passport.authenticate('facebook')
// ))

// app.use(route.get('/auth/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/app',
//     failureRedirect: '/'
//   })
// ))

// app.use(route.get('/auth/twitter',
//   passport.authenticate('twitter')
// ))

// app.use(route.get('/auth/twitter/callback',
//   passport.authenticate('twitter', {
//     successRedirect: '/app',
//     failureRedirect: '/'
//   })
// ))

// app.use(route.get('/auth/google',
//   passport.authenticate('google')
// ))

// app.use(route.get('/auth/google/callback',
//   passport.authenticate('google', {
//     successRedirect: '/app',
//     failureRedirect: '/'
//   })
// ))

// // Require authentication for now
// app.use(function(ctx, next) {
//   if (ctx.isAuthenticated()) {
//     return next()
//   } else {
//     ctx.redirect('/')
//   }
// })

// // app.use(route.get('/', function(ctx) {
// //   ctx.type = 'html'
// //   ctx.body = fs.createReadStream('views/login.html')
// // }))

// app.use(route.get('/app', function(ctx) {
//   ctx.type = 'html'
//   ctx.body = fs.createReadStream('views/app.html')
// }))

const app = new Koa();

console.info(`🌎  Listening on port ${webpackConfig._hotPort}. Open up http://localhost:${webpackConfig._hotPort}/ in your browser.`);
app.listen(webpackConfig._hotPort);
