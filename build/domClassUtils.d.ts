declare type ClassInput = string | undefined | boolean | number;
declare class ClassUtils {
    classList: string[];
    constructor(...args: ClassInput[]);
    addWithPrefix(prefix: string, ...args: ClassInput[]): this;
    add(...args: ClassInput[]): this;
    toString(): string;
    addIf(cond?: boolean | string, clsTrue?: string, clsFalse?: string): this;
}
export default function createClass(...args: ClassInput[]): ClassUtils;
export declare function createClassStr(...args: ClassInput[]): string;
export {};
