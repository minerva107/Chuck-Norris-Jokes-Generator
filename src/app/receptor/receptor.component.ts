import { Component, OnInit } from '@angular/core';
import { HttpUtilService } from '../http-util.service';


@ Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})

export class ReceptorComponent implements OnInit {

  piada: string;

  jokeServiceCaminho: HttpUtilService;

constructor(jokeService: HttpUtilService) {
    this.jokeServiceCaminho = jokeService;

  }

  ngOnInit()  {

  }
 lerPiada() {

  this.jokeServiceCaminho.executarPedidoGet().subscribe(
    data => {this.piada = data[this.jokeServiceCaminho.getJokeParam];
    }
  );
 }
}
