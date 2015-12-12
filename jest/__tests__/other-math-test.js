jest.dontMock('../app/othermath');  // Don't create mock functions
var math = require('../app/othermath');

// checkWordCount function
describe('checkWordCount', function() {
  it('defines checkWordCount function', function() {
    expect(math.checkWordCount).toBeDefined();
  });

  it('confirms the text is less than 100 characters', function() {
    expect(math.checkWordCount("I'm so glad it's Friday!")).toBe(true);
  });
});

// duplicateCheck function
describe('duplicateCheck', function() {
  it('defines duplicateCheck function', function() {
    expect(math.duplicateCheck).toBeDefined();
  });

  it('confirms there are no duplicate words', function() {
    expect(math.duplicateCheck("I'm so glad it's Friday!")).toBe(false);
  });
});

// verifyAlphaNumeric function
describe('verifyAlphaNumeric', function() {
  it('defines verifyAlphaNumeric function', function() {
    expect(math.verifyAlphaNumeric).toBeDefined();
  });

  it('confirms there are no alphanumeric keys in string', function() {
    expect(math.verifyAlphaNumeric("I'm so glad it's Friday $%*")).toBe(false);
  });
});