var crap = require("../routes");

describe('index', function() {
    it('renders the index with a title', function() {
        var response = jasmine.createSpyObj('response', ['render']);
        crap.index({}, response);
        expect(response.render).toHaveBeenCalledWith('index', {title: 'do it!'});
    });
});