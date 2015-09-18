describe('bottleCount', function() {
  it("is a function", function() {
    expect(bottleCount).to.be.a('function');
  });

  it("returns at least one line of text", function() {
  expect(bottleCount(2)).to.be.a('string');
  });

  it("returns the entire song for a given input", function() {
  expect(bottleCount(99)).to.contain("99 bottles of beer");
  });
});

describe('repeatedLyrics', function() {
  it("returns the lyrics for a specific number", function() {
    expect(repeatedLyrics(2)).to.not.contain("4 bottles of beer");
  });
});

describe('lastButOneLyrics', function() {
  it("returns the one-bottle only correct plural ending", function() {
    expect(lastButOneLyrics(1)).to.contain("1 bottle");
  });
});

describe('finalLyrics', function() {
  it("returns the last line of the song", function() {
    expect(finalLyrics()).to.contain("No more bottles of beer on the wall");
  });
});