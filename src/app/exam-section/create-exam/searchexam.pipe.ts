import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchexam',
  standalone: true
})
export class SearchexamPipe implements PipeTransform {
//args   means search parameter
//value  means result value  value means data
  transform(MyquestionDB: any, mysearchtext?: any): any {
    if (!MyquestionDB) {
      return null
    }
    if (!mysearchtext) {
      return MyquestionDB;
    }

    mysearchtext = mysearchtext.toLowerCase()


return MyquestionDB.filter((item: any) =>
  JSON.stringify(item).toLowerCase().includes(mysearchtext)
);


  }



// transform(questiondatabase: any[], searchtext: string): any[] {
//   if (!questiondatabase || !searchtext) {
//     return questiondatabase;
//   }

//   searchtext = searchtext.toLowerCase();

//   return questiondatabase.filter(Qcontainer => 
//     (Qcontainer.std.toLowerCase().includes(searchtext) ||
//      Qcontainer.sub.toLowerCase().includes(searchtext) ||
//      Qcontainer.template.toLowerCase().includes(searchtext) ||
//      Qcontainer.question.toString().toLowerCase().includes(searchtext))
//   );
// }
}
