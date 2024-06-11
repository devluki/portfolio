import { useState, useRef, useEffect } from "react";
import { FPS, ANIMATION_STROKE } from "../../utils/consts";

import styles from "./StackCarosel.module.scss";

interface StackCarouselProps {
    data: {
        name: string;
        icon: string;
    }[];
}

const StackCarousel = (props: StackCarouselProps) => {
    // Data for cards inside carousel passed in props
    // Offset stored in state -> to render on different position each time
    // Mouse coords for draging stored inside refs to avoid rerender on each change

    const data = [...props.data, ...props.data, ...props.data]; // One set of input data multiplayed in component -> use loop?

    const [cards, setCards] = useState(data);

    const [offset, setOffset] = useState(0);

    const isMouseDown = useRef(false);

    const mouseStart = useRef(0);
    const mouseEnd = useRef(0);
    // Consider intervalRef and startOffset to useMemo()
    const intervalRef = useRef(0);
    const startOffset = useRef(Math.floor(cards.length / 2));

    // Reference to get current styling and calculate width of an element
    // Box-sizing: Border-box
    const slideItem = useRef<HTMLDivElement | null>(null);
    const slideItemWidth = useRef(0);

    //test

    useEffect(() => {
        const style = window.getComputedStyle(slideItem.current!);
        // Total width === width + 2*margin left || 2*margin right
        slideItemWidth.current =
            +style.width.replace("px", "") +
            +style.marginLeft.replace("px", "") * 2;
        // console.log(slideItemWidth.current, Math.floor(cards.length / 2));

        setOffset(startOffset.current * slideItemWidth.current);
    }, [cards.length]);

    // Change offset, interval starts on page load
    const interval = () =>
        setInterval(() => {
            setOffset((prev) => prev - ANIMATION_STROKE);
        }, FPS);

    useEffect(() => {
        const id = interval();
        intervalRef.current = id;

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    // On mouse down
    // 1. Set flag => isMouseDown
    // 2. Calculate mouse position in relation to slider, have to include total offset of slider
    // 3. Store values of mouse start and mouse end position

    // const onMouseDownHandler = (e: React.MouseEvent | TouchEvent) => {
    const onMouseDownHandler = (e: React.MouseEvent) => {
        isMouseDown.current = true;
        // dragStart.current = true;
        // dragEnd.current = false;
        // Stop interval === animation stop
        clearInterval(intervalRef.current);
        const mouseOffset = mouseEnd.current - mouseStart.current + offset;

        mouseStart.current = e.clientX - mouseOffset;

        // mouseStart.current = e.clientX - mouseOffset;
    };
    const onTouchStartHandler = (e: React.TouchEvent) => {
        isMouseDown.current = true;

        console.log(e.type);
        clearInterval(intervalRef.current);
        const mouseOffset = mouseEnd.current - mouseStart.current + offset;
        mouseStart.current = e.touches[0].pageX - mouseOffset;
    };
    // On mouse move
    // Sets new slider offset based on mouse start position from onMouseDownHandler
    // and current position stored in mouseEnd

    const onMouseMoveHandler = (e: React.MouseEvent) => {
        if (!isMouseDown.current) return;
        mouseEnd.current = e.clientX;

        setOffset(mouseEnd.current - mouseStart.current);
    };

    const onTouchMoveHander = (e: React.TouchEvent) => {
        if (!isMouseDown.current) return;
        mouseEnd.current = e.touches[0].pageX;
        setOffset(mouseEnd.current - mouseStart.current);
    };

    const onMouseUp = () => {
        //Reset to initial values

        isMouseDown.current = false;

        mouseStart.current = 0;
        mouseEnd.current = 0;

        // dragStart.current = false;
        clearInterval(intervalRef.current);

        intervalRef.current = interval();

        // Change cards

        const reminder =
            offset % (startOffset.current * slideItemWidth.current);

        console.log("mouseup");
        const data = [...cards];
        // TODO: Calculate offset value based on screen width??
        if (offset < -2000) {
            const startIndex = 0;
            const endIndex = Math.floor(
                Math.abs(
                    offset / (startOffset.current * slideItemWidth.current),
                ),
            );
            if (endIndex === 0) return;
            const removedNodes = data.splice(startIndex, endIndex);
            setCards([...data, ...removedNodes]);

            setOffset(
                reminder - (startOffset.current - 1) * slideItemWidth.current,
            );
        }
        if (offset > -1500) {
            const startIndex =
                data.length -
                Math.floor(
                    Math.abs(
                        offset / (startOffset.current * slideItemWidth.current),
                    ),
                );

            const endIndex = data.length;
            const removedNodes = data.splice(startIndex, endIndex);
            setCards([...removedNodes, ...data]);

            setOffset(reminder - startOffset.current * slideItemWidth.current);
        }
    };

    const onMouseLeave = () => {
        if (!isMouseDown.current) return;
        mouseStart.current = 0;
        mouseEnd.current = 0;

        intervalRef.current = interval();

        isMouseDown.current = false;
    };

    useEffect(() => {
        if (isMouseDown.current) return;

        const reminder =
            offset % (startOffset.current * slideItemWidth.current);

        if (offset === reminder) return;

        const data = [...cards];

        const startIndex = 0;

        const endIndex = Math.floor(
            Math.abs(offset / (startOffset.current * slideItemWidth.current)),
        );
        if (endIndex === 0) return;
        const removedNodes = data.splice(startIndex, endIndex);
        setCards([...data, ...removedNodes]);

        setOffset(
            reminder - (startOffset.current - 1) * slideItemWidth.current,
        );
    }, [offset, cards]);

    const style = { transform: `translateX(${offset}px)` };

    return (
        <>
            <div className={styles.slider}>
                {cards.map((el, i) => (
                    <div
                        onTouchStart={onTouchStartHandler}
                        onTouchMove={onTouchMoveHander}
                        onTouchEnd={onMouseUp}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMoveHandler}
                        onMouseDown={onMouseDownHandler}
                        onMouseLeave={onMouseLeave}
                        onTouchCancel={onMouseLeave}
                        className={styles.slider__item}
                        key={el.name + i}
                        style={style}
                        ref={slideItem}
                    >
                        <div id="slide__container" className={styles.container}>
                            <h4 className={styles.item__title}>{el.name}</h4>
                            <svg>
                                <use xlinkHref={el.icon}></use>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default StackCarousel;
