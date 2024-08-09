import Algebrite from 'algebrite';

export function calculateDerivative(expression, variable = 'x') {
  try {
    const derivative = Algebrite.run(`d(${expression}, ${variable})`);
    return derivative;
  } catch (error) {
    throw new Error('Invalid input. Unable to calculate derivative.');
  }
}
