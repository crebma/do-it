var crap = require("../routes");

describe('index', function() {
		it('should be your mom', function() {
			var response = jasmine.createSpyObj('smith', ['render']);
			crap.index({}, response);
			expect(response.render).toHaveBeenCalledWith('index', {title: 'do it!'});
		});
	});