export class AxisRenderer {
  render(context, width, height) {
    context.save();
    context.strokeStyle = 'rgba(114, 167, 255, 0.8)';
    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(0, height / 2);
    context.lineTo(width, height / 2);
    context.stroke();

    context.beginPath();
    context.moveTo(width / 2, 0);
    context.lineTo(width / 2, height);
    context.stroke();

    context.restore();
  }
}
