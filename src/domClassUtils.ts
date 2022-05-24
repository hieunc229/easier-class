// dom-class-utils

type ClassInput =  string | undefined | boolean | number;
class ClassUtils {

    classList: string[];

    constructor(...args: ClassInput[]) {
        this.classList = (args && args.filter(cls => cls !== undefined && cls !== false) as string[]) || [];
    }

    addWithPrefix(prefix: string, ...args: ClassInput[]) {
        args.forEach(el => {
            el !== undefined && el !== false && this.classList.push(`${prefix}${el}`)
        })
        return this;
    }

    add(...args: ClassInput[]) {
        this.classList = this.classList.concat(
            args.filter(cls => cls !== undefined && cls !== false) as string[]
        );
        return this;
    }

    toString() {
        return this.classList.join(" ");
    }

    addIf(cond?: boolean | string, clsTrue?: string, clsFalse?: string) {
        cond && clsTrue && this.classList.push(clsTrue);
        !cond && clsFalse && this.classList.push(clsFalse);
        return this;
    }
}

export default function createClass(...args: ClassInput[]) {
    return new ClassUtils(...args);
}

export function createClassStr(...args: ClassInput[]) {
  return createClass(...args).toString();
}