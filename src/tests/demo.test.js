describe('Test in the demo.test.js', () => {
    
    test('Should be equals', () => {
    
        // Arrange
        const message = 'Hello World!';
    
        // Action
        const message_two = `Hello World!`;
    
        // Assert
        expect(message).toBe(message_two);
    });

});
