const printMessage = require('../src/index');

test('prints "Hello, World!" to the console', () => {
    console.log = jest.fn(); // Mock console.log

    printMessage();

    expect(console.log).toHaveBeenCalledWith('Hello, World!');
});
