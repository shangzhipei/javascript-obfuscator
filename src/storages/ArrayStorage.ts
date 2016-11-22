import { AbstractStorage } from './AbstractStorage';

export abstract class ArrayStorage <T> extends AbstractStorage <T> {
    /**
     * @type {T[]}
     */
    protected storage: T[] = [];

    /**
     * @param key
     * @returns {T}
     */
    public get (key: number): T {
        const value: T | undefined = this.storage[key];

        if (!value) {
            throw new Error(`No value found in array storage with key \`${key}\``);
        }

        return value;
    }

    /**
     * @param value
     * @returns {string | number}
     */
    public getKeyOf (value: T): string | number {
        return this.storage.indexOf(value);
    }

    /**
     * @returns {number}
     */
    public getLength (): number {
        return this.storage.length;
    }

    /**
     * @param key
     * @param value
     */
    public set (key: string | null, value: T): void {
        this.storage.push(value);
    }
}
