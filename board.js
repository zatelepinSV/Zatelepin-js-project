game.board = {



  createForest(context, width, height) {
      context.lineWidth = 1;
      for (var k = 0; k < width; k += 70) {
        context.beginPath();
        var e = Math.floor(Math.random() * (80 - 40)) + 40;
        context.fillStyle = '#9BA4A9'
        context.strokeStyle = 'brown';
        context.fillRect(k, 0, e, height);
        context.closePath();
        k += e;
      }
      context.beginPath();
      context.fillStyle = '#41A54B';
      context.fillRect(0, height - 100, width, 100);
      context.fillStyle = '#48B758';
      context.fillRect(0, height - 200, width, 100);
      context.fillStyle = '#54C867';
      context.fillRect(0, height - 300, width, 120);
      context.closePath();
  }
}