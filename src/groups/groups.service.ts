import { IGroup } from './../interfaces/IGroup';
import { IWord } from './../interfaces/IWord';
import { Injectable } from '@nestjs/common';
import * as template1 from '../Resources/template1.json'
import * as template2 from'../Resources/template2.json'

@Injectable()
export class GroupsService {

    getListTemplate(id: string): IGroup {
        switch (id) {
            case '1':
                return { Id: template1.id, Name: template1.name, Words: this.parseCsv(decodeURIComponent(escape(atob(template1.text)))) };
            case '2':
                return { Id: template2.id, Name: template2.name, Words: this.parseCsv(decodeURIComponent(escape(atob(template2.text)))) };
            case '3':
                    return { Id: '3', Name: 'test', Words: [] };
        }
    }
        
    parseCsv(csv: string): IWord[] {
        const rows = csv.trim().split('\n');
        return rows.map((row) => {
            const [name, value] = row.split('\t');
            return { Name: name.trim(), Value: value.trim() };
        });
};

}
