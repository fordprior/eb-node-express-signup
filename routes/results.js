
/*
 * GET test results page.
 */

exports.index = function(req, res){
  res.render('results', { appTitle: 'Test Results Display'});
};
