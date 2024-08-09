import Algebrite from 'algebrite';

export function calculateIntegral(expression, variable = 'x') {
  try {
    const result = Algebrite.integral(`${expression} d${variable}`).toString();
    return result;
  } catch (error) {
    throw new Error('Invalid input. Unable to calculate integral.');
  }
}

export function calculateDoubleIntegral(expression, variable1 = 'x', variable2 = 'y') {
  try {
    const firstIntegration = Algebrite.integral(`${expression} d${variable2}`).toString();
    const result = Algebrite.integral(`${firstIntegration} d${variable1}`).toString();
    return result;
  } catch (error) {
    throw new Error('Invalid input. Unable to calculate double integral.');
  }
}

export function calculateTripleIntegral(expression, variable1 = 'x', variable2 = 'y', variable3 = 'z') {
  try {
    const firstIntegration = Algebrite.integral(`${expression} d${variable3}`).toString();
    const secondIntegration = Algebrite.integral(`${firstIntegration} d${variable2}`).toString();
    const result = Algebrite.integral(`${secondIntegration} d${variable1}`).toString();
    return result;
  } catch (error) {
    throw new Error('Invalid input. Unable to calculate triple integral.');
  }
}
