export declare class TranslateService {
    getTranslate(id: string, text: string, codeLanguage: string): Promise<string>;
    detectLanguage(text: string): Promise<string>;
    translateText: (text: string, targetLanguage: string) => Promise<string>;
}
