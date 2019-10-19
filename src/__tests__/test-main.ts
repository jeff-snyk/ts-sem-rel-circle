test("trivial test", () => {
  const a = 1;
  const b = 1;

  expect(a).toBe(b);
});

test("ensure stuff works", () => {
  const innerLib = require("../inner-lib");
  const m = innerLib.getMessage();
  expect(m).toBe("inner lib message");
});

test("test example with mocking", () => {
  jest.doMock("../inner-lib", () => {
    return {
      getMessage: jest.fn(() => {
        return "mocked message";
      }) //,
      // anotherFunction: jest.fn((x: int, y: string) => {
      //     return "mocked message";
      // })
    };
  });

  const outerLib = require("../outer-lib");
  const msg = outerLib.callGetMessage();
  expect(msg).toBe("mocked message");
});
