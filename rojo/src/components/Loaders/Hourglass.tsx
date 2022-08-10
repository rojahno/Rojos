import styled from "styled-components";
import { TurnAnimation } from "../animations";

interface HourglassProps {
    size?: string;
    animationDuration?: string;
    color?: string;
}
/**
 * @todo test the size of the component and implement color change.
 */
const HourglassImage = styled.svg<HourglassProps>`
    width: ${(props) => (props.size ? props.size : "3em")};
    height: ${(props) => (props.size ? props.size : "3em")};
    animation-name: ${TurnAnimation};
    animation-duration: ${(props) => (props.animationDuration ? props.animationDuration : "1250ms")};
    animation-delay: 0ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
    fill: ${(props) => (props.color ? props.color : "#000000")};
`;

export function HourGlass(props: HourglassProps) {
    return (
        <HourglassImage
            size={props.size}
            color={props.color}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 1C4 0.447715 4.44772 0 5 0H19C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2V5.1265C19 6.6104 18.3409 8.01764 17.2009 8.96761L13.562 12L17.2009 15.0324C18.3409 15.9824 19 17.3896 19 18.8735V22C19.5523 22 20 22.4477 20 23C20 23.5523 19.5523 24 19 24H5C4.44772 24 4 23.5523 4 23C4 22.4477 4.44772 22 5 22V18.8735C5 17.3896 5.65912 15.9824 6.79908 15.0324L10.438 12L6.79908 8.96761C5.65911 8.01764 5 6.6104 5 5.1265V2C4.44772 2 4 1.55228 4 1ZM7 2V5.1265C7 6.01684 7.39547 6.86118 8.07945 7.43116L12 10.6983L15.9206 7.43116C16.6045 6.86118 17 6.01684 17 5.1265V2H7ZM12 13.3017L8.07945 16.5688C7.39547 17.1388 7 17.9832 7 18.8735V22H17V18.8735C17 17.9832 16.6045 17.1388 15.9206 16.5688L12 13.3017Z"
                fill="currentColor"
            />
        </HourglassImage>
    );
}
