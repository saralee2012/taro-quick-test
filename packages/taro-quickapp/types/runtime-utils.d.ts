import { initNativeApi } from './apis';
import appGlobal from './globalQuick';
export { appGlobal, initNativeApi };
export * from './components';
export declare const hostConfig: {
    initNativeApi: typeof initNativeApi;
    isBubbleEvents(eventName: string, _tagName: string): boolean;
    getPathIndex(indexOfNode: any): string;
};
