import { Component, OnInit } from '@angular/core';
import { ItabngFor } from '../modules/tab';

@Component({
  selector: 'app-tab-ng-for',
  templateUrl: './tab-ng-for.component.html',
  styleUrls: ['./tab-ng-for.component.scss']
})
export class TabNgForComponent implements OnInit {
 
  selectedskill : string = 'html'
  skillsArray:Array<ItabngFor>= [
    {
      skillname:'html',
      skillcontent:` Lorem ipsum dolor sit amet consectetur adipisicing elit
                          Reiciendis sed consectetur tempore, saepe numquam rerum iusto nostrum? Quam,
                           ad magnam fuga quos nihil repudiandae pariatur, sint, quia aliquam exercitationem quisquam!`
   
  },
    
    {
      skillname:'css',
      skillcontent:`Lorem ipsum dolor sit amet consectetur adipisicing elit
                          Reiciendis sed consectetur tempore, saepe numquam rerum iusto nostrum? Quam,
                           ad magnam fuga quos nihil repudiandae pariatur, sint, quia aliquam exercitationem quisquam!`
    },
    {
      skillname:'javascript',
      skillcontent:`Lorem ipsum dolor sit amet consectetur adipisicing elit
                          Reiciendis sed consectetur tempore, saepe numquam rerum iusto nostrum? Quam,
                           ad magnam fuga quos nihil repudiandae pariatur, sint, quia aliquam exercitationem quisquam!`
    },
    {
      skillname:'angular',
      skillcontent:`Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Reiciendis sed consectetur tempore, saepe numquam rerum iusto nostrum? Quam,
                     ad magnam fuga quos nihil repudiandae pariatur, sint, quia aliquam exercitationem quisquam!`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}


  
  

         
 
