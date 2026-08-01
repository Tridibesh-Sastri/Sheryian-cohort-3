export class LabelRenderer {
  render(context, labels) {
    context.save();
    context.fillStyle = 'rgba(231, 236, 255, 0.85)';
    context.font = '12px Arial';

    labels.forEach((label) => {
      context.fillText(label.text, label.x, label.y);
    });

    context.restore();
  }
}
