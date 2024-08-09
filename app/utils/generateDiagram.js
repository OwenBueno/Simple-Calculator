import { evaluate } from 'mathjs';

export function generateDiagram(formula) {
  try {
    // Example logic to create points for a diagram based on a mathematical formula
    const points = [];
    for (let x = -10; x <= 10; x += 0.5) {
      const y = evaluate(formula, { x });
      points.push({ x, y });
    }
    return points; // You can return these points to plot in a chart component
  } catch (error) {
    throw new Error('Invalid input. Unable to generate diagram.');
  }
}
