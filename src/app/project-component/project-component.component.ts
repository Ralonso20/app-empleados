import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['']);
  }
}
