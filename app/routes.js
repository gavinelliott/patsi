module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    /* redirect routes for v1 */
    app.post('patsi/pc-rule-type', function (req, res) {
	switch(req.body["radio-inline-group"]) {
	  case "PC":
	    res.render("patsi/pc-rule-type");
	  case "WU":
	    res.render("patsi/rule-maker");
	  case "DLO":
	    res.render("patsi/rule-maker");
	  default:
	    //None of the above, go to error
	    res.redirect("patsi/rule-maker");
	}
	});


  }
};
