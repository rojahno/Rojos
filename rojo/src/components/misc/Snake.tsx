import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useInterval from "../../hooks/UseInterval";

const SnakeCanvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #00000080;
`;

const GameText = styled.h1`
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
    text-align: center;
    `;

enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

const GREEN = "#00ff00";
const RED = "#ff0000";
const BLACK = "#000000";

const initialSnake = [[70, 49], [77, 49], [84, 49], [91, 49]]
const rectSize = 7;

export const SnakeGame = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const container = useRef<HTMLDivElement | null>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
    const [snake, setSnake] = useState(initialSnake);
    const [apple, setApple] = useState<number[]>();
    const [hasEaten, setHasEaten] = useState<boolean>(false);
    const [direction, setDirection] = useState<Direction>(Direction.Right);
    const [gameOver, setGameOver] = useState(false);
    const speed = 50;
    const [delay, setDelay] = useState<number | null>(speed);

    useInterval(() => runGame(), delay)

    useEffect(() => {
        if (canvasRef.current) {
            setCtx(canvasRef.current.getContext("2d"))
        }
        if (container.current) {
            container.current.focus();
            spawnFruit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const resetGame = () => {
        setSnake(initialSnake);
        setGameOver(false);
        setDirection(Direction.Right);
        spawnFruit();
        setDelay(speed)
    }

    const runGame = () => {
        if (ctx && canvasRef.current) {
            clearCanvas()
            draw();
            checkFruitCollision();
            let gameOver = hasCollided();
            container.current?.focus();
            if (gameOver) {
                setGameOver(true);
                setDelay(null)
            }
            updateSnake();
            if (hasEaten) {
                spawnFruit()
                setHasEaten(false);
            }
        }
    }
    const clearCanvas = () => {
        if (ctx && canvasRef.current) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    }
    const hasCollided = () => {
        if (checkBodyCollision() || checkEdgeCollision()) {
            return true;
        }
        return false;
    }

    // Checks if the snake and apple are colliding
    const checkFruitCollision = () => {
        const body = [...snake];
        const head = body.pop()!;
        if (apple) {
            if (apple[0] === head[0] && apple[1] === head[1]) {
                setHasEaten(true);
                return true;
            }
        }
        return false;
    }

    const checkEdgeCollision = () => {
        const body = [...snake];
        const head = body.pop()!;
        if (head[0] < 0 || head[0] > canvasRef.current!.width || head[1] < 0 || head[1] > canvasRef.current!.height - rectSize) {
            return true;
        }
        return false;
    }

    const checkBodyCollision = () => {
        const body = [...snake];
        const head = body.pop()!;

        for (let i in body) {
            if (snake[i][0] === head[0] && snake[i][1] === head[1]) {
                return true;
            }
        }
        return false;
    }

    const spawnFruit = () => {
        let valid = false;
        while (!valid) {
            let fruitX = Math.abs(Math.round(Math.random() * (canvasRef.current!.width / rectSize)) * rectSize - rectSize);
            let fruitY = Math.abs(Math.round(Math.random() * (canvasRef.current!.height / rectSize)) * (rectSize) - rectSize);
            console.log(fruitX, fruitY);
            console.log("wh" + canvasRef.current?.width, canvasRef.current?.height);
            for (let block in snake) {
                if (fruitX === snake[block][0] && fruitY === snake[block][1]) {
                    valid = false;
                    break;
                }
                valid = true;
                setApple([fruitX, fruitY]);
            }
        }
    }

    const updateSnake = () => {
        const head = snake[snake.length - 1];
        const newSnake = [...snake];

        if (direction === Direction.Up) {
            newSnake.push([head[0], head[1] - rectSize])
        }
        else if (direction === Direction.Down) {
            newSnake.push([head[0], head[1] + rectSize])
        }
        else if (direction === Direction.Left) {
            newSnake.push([head[0] - rectSize, head[1]])
        }
        else if (direction === Direction.Right) {
            newSnake.push([head[0] + rectSize, head[1]])
        }
        if (!hasEaten) {
            newSnake.shift();
        }
        setSnake(newSnake);
    }

    const draw = () => {
        if (ctx) {
            if (apple) {
                ctx.fillStyle = RED;
                ctx.fillRect(apple[0], apple[1], rectSize, rectSize);
                ctx.lineWidth = 0.5;
                ctx.strokeRect(apple[0], apple[1], rectSize, rectSize);
            }
            for (let block in snake) {
                ctx.fillStyle = GREEN;
                ctx.fillRect(snake[block][0], snake[block][1], rectSize, rectSize);
                ctx.strokeRect(snake[block][0], snake[block][1], rectSize, rectSize);
            }
        }
    }


    const changeDirection = (e: React.KeyboardEvent<HTMLDivElement>) => {
        switch (e.key) {
            case "ArrowLeft":
                if (direction !== Direction.Right) {
                    setDirection(Direction.Left)
                }
                break;
            case "ArrowUp":
                if (direction !== Direction.Down) {
                    setDirection(Direction.Up)
                }
                break;
            case "ArrowRight":
                if (direction !== Direction.Left) {
                    setDirection(Direction.Right)
                }
                break;
            case "ArrowDown":
                if (direction !== Direction.Up) {
                    setDirection(Direction.Down)
                }
                break;
            case "Escape":
                if (delay === null) {
                    setDelay(speed);
                } else {
                    setDelay(null);
                }
                break;
            case " ":
                if (gameOver) {
                    resetGame()
                }
                break;
        }
    }

    return (
        <div ref={container} tabIndex={1} onKeyDown={(e) => changeDirection(e)} >
            <GameText hidden={!gameOver}>GAME OVER: <br /> Press space to restart</GameText>
            <SnakeCanvas tabIndex={0} ref={canvasRef} />
        </div>
    )

}