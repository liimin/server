const router = require('koa-router')()
router.prefix('/users')
const User = require('../data/entity').User;

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response koa!'
})

router.get('/find', async (ctx, next)=> {
  await User.find({where:{firstName:'John'}}).then(function(user){
	  ctx.body =user
	}).catch(next);
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
