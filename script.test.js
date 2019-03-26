const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];
it("this is a dumb test", () => {
  expect("hello").toBe("hello");
  googleSearch("testtest", dbMock);
});

it("is searching google", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("dg", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
});
