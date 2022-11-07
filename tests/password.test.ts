import Password, { setDefaultPasswordSalt } from "./../src";

describe("mongez/password", () => {
  it("Should generate a hashed password", () => {
    const password = "123456";
    const hashedPassword = Password.generate(password);

    expect(hashedPassword).not.toEqual(password);
  });

  it("Should verify a hashed password", () => {
    const password = "123456";

    const hashedPassword = Password.generate(password);

    expect(Password.verify(hashedPassword, password)).toBeTruthy();
  });

  it("Should not verify a hashed password", () => {
    const password = "123456";

    const hashedPassword = Password.generate(password);

    expect(Password.verify(hashedPassword, "1234567")).toBeFalsy();
  });

  it("Should generate a hashed password with custom salt", () => {
    const password = "123456";

    const hashedPassword = Password.generate(password, 15);

    expect(hashedPassword).not.toEqual(password);

    expect(Password.verify(hashedPassword, password)).toBeTruthy();
  });

  it("Should generated a hashed password with setting default salt", () => {
    setDefaultPasswordSalt(15);

    const password = "123456";

    const hashedPassword = Password.generate(password);

    console.log(hashedPassword);

    expect(hashedPassword).not.toEqual(password);

    expect(Password.verify(hashedPassword, password)).toBeTruthy();
  });
});
