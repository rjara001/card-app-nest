import { Injectable } from '@nestjs/common';
import { TranslationServiceClient } from '@google-cloud/translate';

@Injectable()
export class TranslateService {


  async getTranslate(id: string, text: string, codeLanguage: string) {
    return await this.translateText(text, codeLanguage);
  }

  async detectLanguage(text: string): Promise<string> {
    const translationClient = new TranslationServiceClient();

    const [detections] = await translationClient.detectLanguage({
      parent: `projects/${process.env.GOOGLE_CLOUD_PROJECT_ID}`,
      content: text,
    });

    const languageCode = detections.languages[0].languageCode;

    return languageCode;
  }

  translateText = async (
    text: string,
    targetLanguage: string,
  ): Promise<string> => {
    try {
      // Creates a client
      const translationClient = new TranslationServiceClient();
  
      // Construct request
      const request = {
        parent: `projects/${process.env.GOOGLE_CLOUD_PROJECT_ID}/locations/global`,
        contents: [text],
        mimeType: 'text/plain',
        targetLanguageCode: targetLanguage,
      };
  
      // Performs the translation request
      const [response] = await translationClient.translateText(request);
  
      return response.translations[0].translatedText;
    } catch (error) {
      console.error(`Error while translating text: ${error}`);
      return text;
    }
  };
}
