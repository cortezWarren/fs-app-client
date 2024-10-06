import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // public users: any[] = [];
  public displayedColumns: string[] = ['id','username'];
  public dataSource: any[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(response => {
      console.table(response);
      
      this.dataSource = response;
    });
  }

}
