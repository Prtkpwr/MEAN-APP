

var User = require('../models/User');

module.exports = function(router){
router.post('/users',function(req, res){
	var user = new User();
	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;
	if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email== ''){
		res.send('Ensure all details are provided !!')

	}else{
		user.save(function(err){
		if(err) {res.send('username or email already exist!!');
		} else{
			res.send('USer Created!');
		}
	});
	}
	
});

router.get('/',function(req, res){
      res.send('Hello!!')
});
return router;
}