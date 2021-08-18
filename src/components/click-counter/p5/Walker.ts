import p5 from "p5";

export default class Walker {
    x: number;
    y: number;
    p: p5;
    constructor(p: p5) {
      this.x = p.width / 2;
      this.y = p.height / 2;
      this.p = p;
    }
  
    render() {
      this.p.stroke(0);
      this.p.point(this.x, this.y);
    }
  
    step() {
      let choice = Math.floor(this.p.random(4));
      if (choice === 0) {
        this.x++;
      } else if (choice === 1) {
        this.x--;
      } else if (choice === 2) {
        this.y++;
      } else {
        this.y--;
      }
      this.x = this.p.constrain(this.x, 0, this.p.width - 1);
      this.y = this.p.constrain(this.y, 0, this.p.height - 1);
    }
}