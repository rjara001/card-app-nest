"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateService = void 0;
const common_1 = require("@nestjs/common");
const translate_1 = require("@google-cloud/translate");
let TranslateService = class TranslateService {
    constructor() {
        this.translateText = async (text, targetLanguage) => {
            try {
                const translationClient = new translate_1.TranslationServiceClient();
                const request = {
                    parent: `projects/${process.env.GOOGLE_CLOUD_PROJECT_ID}/locations/global`,
                    contents: [text],
                    mimeType: 'text/plain',
                    targetLanguageCode: targetLanguage,
                };
                const [response] = await translationClient.translateText(request);
                return response.translations[0].translatedText;
            }
            catch (error) {
                console.error(`Error while translating text: ${error}`);
                return text;
            }
        };
    }
    async getTranslate(id, text, codeLanguage) {
        return await this.translateText(text, codeLanguage);
    }
    async detectLanguage(text) {
        const translationClient = new translate_1.TranslationServiceClient();
        const [detections] = await translationClient.detectLanguage({
            parent: `projects/${process.env.GOOGLE_CLOUD_PROJECT_ID}`,
            content: text,
        });
        const languageCode = detections.languages[0].languageCode;
        return languageCode;
    }
};
TranslateService = __decorate([
    (0, common_1.Injectable)()
], TranslateService);
exports.TranslateService = TranslateService;
//# sourceMappingURL=translate.service.js.map