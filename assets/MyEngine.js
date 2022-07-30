var bucleInfinito = {
  id: null,
  user: () => {
    return true;
  },
  pause: false,
  gfx: null,
  onRender: null,
  fin: 0, //Fin del ciclo
  aps: 0, //Actualizaciones por segundo
  fps: 0, //Frames por segundo
  bucle: function (tiempo) {
    if (!bucleInfinito.pause) {
      bucleInfinito.id = window.requestAnimationFrame(bucleInfinito.bucle);
      bucleInfinito.actializar();
      bucleInfinito.refrescar();
      var diferencia = tiempo - bucleInfinito.fin;
      if (diferencia > 999) {
        console.log(`
            fin=${bucleInfinito.fin}\n
            tiempo=${tiempo}\n
            diferencia=${diferencia}\n
            aps=${bucleInfinito.aps}\n
            fps=${bucleInfinito.fps}\n
            `);
        bucleInfinito.fin = tiempo;
        bucleInfinito.fps = 0;
        bucleInfinito.aps = 0;
        bucleInfinito.user();
        if (bucleInfinito.gfx != null) {
          bucleInfinito.onRender(bucleInfinito.gfx);
        }
      }
    } else {
      return false;
    }
  },
  actializar: function () {
    bucleInfinito.aps++;
  },
  refrescar: function () {
    bucleInfinito.fps++;
  },
};

function MyEngine(config) {
  this.canvas = config.el;
  this.stateEngine = true;
  this.loopInfinito = bucleInfinito;
  this.canvasDraw = null;
  this._initGfx();
}

MyEngine.prototype._initGfx = function () {
  const onRender = (gfx) => {
    clear: this.clear(gfx.color);
    drawBox: this.drawBox(gfx.x, gfx.y, gfx.width, gfx.height, gfx.color);
    drawText: this.drawText(gfx.text, gfx.x, gfx.y, gfx.color);
    getWidth: this.getWidth();
    getHeight: this.getHeight();
  };
  this.loopInfinito.onRender = onRender;
};

MyEngine.prototype.init = function () {
  try {
    let view = `<div id='canvasDraw' class="canvas-container"></div>`;
    this.canvas.innerHTML = view;
    this.canvasDraw = document.getElementById("canvasDraw");
    this.loopInfinito.bucle();
  } catch (error) {
    console.log(error);
  }
};

MyEngine.prototype.pause = function () {
  this.loopInfinito.pause = true;
};

MyEngine.prototype.resume = function () {
  this.loopInfinito.pause = false;
  this.loopInfinito.bucle();
};

MyEngine.prototype.onUpdate = function (func) {
  this.loopInfinito.user = func;
};

MyEngine.prototype.onRender = function (gtx) {
  this.loopInfinito.gfx = gtx;
};

MyEngine.prototype.clear = function (color) {
  color = color !== "undefined" ? color : "#000000";
  //this.canvasDraw.style.backgroundColor = color;
  this.canvasDraw.style.backgroundColor = "#000000";
  for (var i = 0; i < this.canvasDraw.children.length; i++) {
    var hijo = this.canvasDraw.children[i];
    this.canvasDraw.removeChild(hijo);
  }
};

MyEngine.prototype.drawBox = function (x, y, width, height, color) {
  const gfx = document.createElement("div");
  this.canvasDraw.appendChild(gfx);
  gfx.style.position = "absolute";
  gfx.style.top = y;
  gfx.style.left = x;
  gfx.style.height = height;
  gfx.style.width = width;
  gfx.style.backgroundColor = color;
};

MyEngine.prototype.drawText = function (text, x, y, color) {
  const gfx = document.createElement("p");
  const content_text = document.createTextNode(text);
  gfx.appendChild(content_text);
  this.canvasDraw.appendChild(gfx);
  gfx.style.position = "absolute";
  gfx.style.top = y;
  gfx.style.left = x;
  gfx.style.color = color;
};
MyEngine.prototype.getWidth = function () {
  console.log(this.canvasDraw.clientWidth);
  return this.canvasDraw.clientWidth;
};

MyEngine.prototype.getHeight = function () {
  console.log(this.canvasDraw.clientHeight);
  return this.canvasDraw.clientHeight;
};

export default MyEngine;
