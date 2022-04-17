import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useInterval from "../../hooks/UseInterval";
import useWindowDimensions from "../../hooks/UseWindowDimensions";
import hourglass from '../../images/hourglass.svg';

const DvdCanvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #00000080;
`;

const GREEN = "#00ff00";
const RED = "#ff0000";
const BLACK = "#000000";
const YELLOW = "#ffff00";
const BLUE = "#0000ff";
const PURPLE = "#ff00ff";
let img = new Image();
img.src = hourglass;


export const DvdScreensaver = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const container = useRef<HTMLDivElement | null>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
    const speed = 7;
    const { height, width } = useWindowDimensions();

    const [delay, setDelay] = useState<number | null>(speed);
    const [position, setPosition] = useState<{ x: number, y: number }>({ x: 300, y: 300 });
    const [direction, setDirection] = useState<{ x: number, y: number }>({ x: 1, y: 1 });
    const [dimensions, setDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const [colorNr, setColorNr] = useState<number>(0);
    const [color, setColor] = useState<string>(BLACK);
    const [colorDelay, setColorDelay] = useState<number | null>(null);


    useInterval(() => run(), delay)
    useInterval(() => changeColor(), colorDelay)

    useEffect(() => {
        if (canvasRef.current) {
            setCtx(canvasRef.current.getContext("2d"))
        }
        if (container.current) {
            container.current.focus();
        }
    }, []);

    const run = () => {
        let addition = 3.5;
        let new_x = (position.x) + (addition * direction.x);
        let new_y = (position.y) + (addition * direction.y);
        setPosition({ x: new_x, y: new_y });
        clearCanvas();
        draw();
        checkBorderCollision();
    }

    const draw = () => {
        if (ctx && canvasRef.current) {
            //Draws text in the canvas
            let text = "DVD";
            ctx.font = "120px Arial";
            ctx.fillStyle = color;
            ctx.fillText(text, position.x, position.y,);
            let width = ctx.measureText(text).width;
            let height = 120;
            if (dimensions.width !== width || dimensions.height !== height) {
                setDimensions({ width, height });
            }
        }
    }

    const changeColor = () => {
        console.log(colorNr)
        switch (colorNr) {
            case 0:
                setColorNr(colorNr + 1);
                setColor(GREEN);
                break;
            case 1:
                setColorNr(colorNr + 1);
                setColor(RED);
                break;
            case 2:
                setColorNr(colorNr + 1);
                setColor(YELLOW);
                break;
            case 3:
                setColorNr(colorNr + 1);
                setColor(BLUE);
                break;
            case 4:
                setColorNr(colorNr + 1);
                setColor(PURPLE);
                break;
            case 5:
                setColorNr(0);
                setColor(BLACK);
                break;
            default:
                setColorNr(0);
                setColor(BLACK);
        }
    }

    const checkBorderCollision = () => {
        let collided = hasCollided();
        if (collided) {
            setColorDelay(50)
        }
        else {
            setColorDelay(null)
        }
    }

    const hasCollided = () => {
        let collided = false;
        if (canvasRef.current) {
            if (position.x > canvasRef.current.width - dimensions.width) {
                setDirection({ x: -1, y: direction.y });
                collided = true;
            }
            if (position.y > canvasRef.current.height) {
                setDirection({ x: direction.x, y: -1 });
                collided = true;
            }
            if (position.x < 0) {
                setDirection({ x: 1, y: direction.y });
                collided = true;
            }
            if (position.y < 0 + dimensions.height) {
                setDirection({ x: direction.x, y: 1 });
                collided = true;
            }
        }
        return collided;
    }


    const clearCanvas = () => {
        if (ctx && canvasRef.current) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    }


    return (
        <div ref={container} tabIndex={1} >
            <DvdCanvas width={width * 1.5} height={height * 1.5} tabIndex={0} ref={canvasRef} />
        </div>
    )

}