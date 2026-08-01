export class VectorRenderer {
  render(context, origin, target) {
    context.save();
    context.strokeStyle = '#72a7ff';
    context.fillStyle = '#72a7ff';
    context.lineWidth = 3;

    context.beginPath();
    context.moveTo(origin.x, origin.y);
    context.lineTo(target.x, target.y);
    context.stroke();

    context.beginPath();
    context.arc(target.x, target.y, 5, 0, Math.PI * 2);
    context.fill();

    context.restore();
  }
}
