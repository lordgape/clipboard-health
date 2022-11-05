const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when candidate is not string", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 0 });
    expect(trivialKey).toBe("0");
  });
  
 
});
