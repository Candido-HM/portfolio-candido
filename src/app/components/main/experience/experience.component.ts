import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
  providers: [ProjectService]
})
export class ExperienceComponent implements OnInit {

  public projects: Project [];
  public url: string;

  constructor(private _projectService: ProjectService){
    this.projects = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
    window.scrollTo(0, 0);
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
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
