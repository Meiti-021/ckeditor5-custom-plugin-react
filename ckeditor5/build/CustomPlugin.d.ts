export default class CustomPlugin extends Plugin {
    static get requires(): (typeof SelectMedia)[];
}
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
declare class SelectMedia extends Plugin {
    init(): void;
}
export {};
