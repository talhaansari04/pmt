import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ProjectUtilsService } from 'src/app/services/project-utils.service';
import { LoaderComponent } from 'src/app/component/loader/loader.component';
import { DumpData } from 'src/app/InsightGlobal/dump-data';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  constructor() { }
  block: any;
  list;
  showList = false;
  ngOnInit() {
    this.block = 'none';

  }
  display(event) {
    console.log(event);
  }

  search(key: string) {
    if (key.length > 3) {
      this.showList = true;
      this.list = DumpData.dropDown;
    } else {
      this.showList = false;
    }
    console.log('Search Box ' + key);
  }
  table(tabledata) {
    debugger
    console.log(tabledata.innerHTML);

  }
}
