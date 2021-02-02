import React from 'react';
export interface IAnimatedCounterRefObject {
    start: (to: number) => void;
}
export interface IAnimatedCounterProps {
    initialValue: number;
}
export declare const AnimatedCounter: React.ForwardRefExoticComponent<IAnimatedCounterProps & React.RefAttributes<IAnimatedCounterRefObject>>;
