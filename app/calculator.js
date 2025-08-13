// exports.calculate = function(expression) {
//   return 0;
// }

exports.calculate = (expression) => {
  try {
    // reversed and splitted input string in tokens 
    const tokens = expression.trim().split(/\s+/).reverse();

    console.log("Tokens:", tokens);

    // Stack to hold operands
    const stack = [];

    // Function to perform arithmetic operations
    function operate(operator, a, b) {
      switch (operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          if (b === 0) {
            throw new Error("Zero division not allowed");
          }
          return a / b;
        default:
          throw new Error(`Unsupported operator: ${operator}`);
      }
    }

    // Process each token
    tokens.forEach(token => {
      // Case token is an operand
      if (['+', '-', '*', '/'].includes(token)) {
        // ensure that there are at least two operands on the stack, which prevents crashes
        if (stack.length < 2) {
          throw new Error("Insufficient operands for operator");
        }
        const a = stack.pop();
        const b = stack.pop();
        const result = operate(token, a, b);
        stack.push(result); // Push result back to the stack
        console.log("stack:", stack);
      } else {
        // case token is a number then push into stack
        const number = parseFloat(token);
        if (isNaN(number)) {
          throw new Error(`Invalid number: ${token}`);
        }
        stack.push(number);
      }
    });

    // Final result should be the only value left in the stack
    if (stack.length !== 1) {
      throw new Error("Invalid expression");
    }
    return stack.pop(); // Final result!!!!

  } catch (error) {
    return `Error: ${error.message}`;
  }
};