import { UnRecursiveTemplate } from '@tarojs/shared/dist/template';
import type { IComponentConfig } from '@tarojs/taro/types/compile/hooks';
export declare class Template extends UnRecursiveTemplate {
    Adapter: {
        if: string;
        else: string;
        elseif: string;
        for: string;
        forItem: string;
        forIndex: string;
        key: string;
        xs: string;
        type: string;
    };
    protected replacePropName(name: any, value: any): any;
    protected getEvents(): {
        onclick: string;
        ontouchstart: string;
        ontouchmove: string;
        ontouchend: string;
        ontouchcancel: string;
        onlongpress: string;
    };
    private buildCompTempl;
    buildTemplate: (componentConfig: IComponentConfig) => string;
    buildPageTemplate: (_baseTempPath: string) => string;
    buildCustomComponentTemplate: (_: string) => string;
}
