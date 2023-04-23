import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

// const FILE_PATH = '..\\src\\Resources\\template.html';
import * as path from 'path';


@Injectable()
export class TemplateService {

    async getTemplate(id: string): Promise<string> {
        const filePath: string = path.join(__dirname, 'src/Resources/template.html');

        const fileContent: string = fs.readFileSync(filePath, 'utf8');
        return fileContent;
    }   

}
