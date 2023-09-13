import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
  providers: [ProjectService]
})
export class ExperienceComponent implements OnInit {

  public projects = [];
  public url: string;

  constructor(private _projectService: ProjectService){
    this.projects = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        console.log(response);
        if(response){
          this.projects = response;
        }
      },
      error => {
        console.log(<any>error);
        console.log(this._projectService);
      }
    );
  }
}
