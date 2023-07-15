import { MutableRefObject, useEffect, useRef } from "react";
import styles from "./CanvasAnimation.module.css";

export default function CanvasAnimation({
ctx,
canvas,
positions, 
interVar
}: {
    ctx : any;
    canvas: any;
    positions: Array<Array<dict<string, number>>>
    interVar: number
}) {

      //   requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(31, 143, 156,0)";
      ctx.lineWidth = 1;

      for (let j = 0; j < positions.length; j++) {
        for (let i = 0; i < positions[j].length; i++) {
          ctx.beginPath();
          if (i > 1) {
            ctx.lineWidth = Math.max(i / 80, 1);
            ctx.strokeStyle = `rgba(70, 110, ${255 - i}, ${i * 0.01})`;

            let temp = (interVar - i) / 5;
            let cos = temp * Math.cos(i * j);
            let sin = temp * Math.sin(i * j);

            // calculate control point coordinates
            // let controlPoint1X = positions[j][i - 2].x + (interVar - i) / 5 * Math.cos(i * j);//+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
            // let controlPoint1Y = positions[j][i - 2].y - (interVar - i) / 5 * Math.sin(i * j);//+ (Math.random() -.5)*(100-i)* Math.sin(i*j);
            // let controlPoint2X = positions[j][i - 1].x + (interVar - i) / 5 * Math.sin(i * j);//+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
            // let controlPoint2Y = positions[j][i - 1].y + (interVar - i) / 5 * Math.cos(i * j);//+ (Math.random() -.5)*(100-i)* Math.sin(i*j);

            let controlPoint1X = positions[j][i - 2].x + cos; //+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
            let controlPoint1Y = positions[j][i - 2].y - sin; //+ (Math.random() -.5)*(100-i)* Math.sin(i*j);
            let controlPoint2X = positions[j][i - 1].x + sin; //+ (Math.random()  - .5)*(100-i)* Math.sin(i*j)/3;
            let controlPoint2Y = positions[j][i - 1].y + cos; //+ (Math.random() -.5)*(100-i)* Math.sin(i*j);

            ctx.moveTo(positions[j][i - 2].x, positions[j][i - 2].y);
            ctx.bezierCurveTo(
              controlPoint1X,
              controlPoint1Y,
              controlPoint2X,
              controlPoint2Y,
              positions[j][i].x,
              positions[j][i].y
            );
            ctx.stroke();
          }
        }
      }
    }
  
  
}
