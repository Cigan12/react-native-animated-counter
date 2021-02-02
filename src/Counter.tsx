import React, { Ref, useImperativeHandle, useRef, useState } from 'react';

export interface IAnimatedCounterRefObject {
    start: (to: number) => void;
}

export interface IAnimatedCounterProps {
    initialValue: number;
}

export const AnimatedCounter = React.forwardRef(
    (
        { initialValue }: IAnimatedCounterProps,
        ref: Ref<IAnimatedCounterRefObject>
    ) => {
        useImperativeHandle(ref, () => ({
            start
        }));

        const [valueToShow, setValueToShow] = useState(initialValue);

        const value = useRef(initialValue);

        const start = (to: number) => {
            requestAnimationFrame(animate.bind(undefined, to));
        };

        const animate = (to: number) => {
            if (value.current > to) value.current--;
            else value.current++;
            setValueToShow(value.current);
            if (value.current !== to) {
                requestAnimationFrame(animate.bind(undefined, to));
            }
        };

        return <>{valueToShow}</>;
    }
);
