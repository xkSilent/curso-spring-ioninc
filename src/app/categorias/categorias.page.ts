import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CategoriaService } from '../services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor( public categoriaService: CategoriaService, public menu: MenuController) { }

  ngOnInit() {
  }

  ionViewDidLoad(){
    
    this.categoriaService.findAll().subscribe(response => { 
      console.log(response);
    }, 
    error => {console.log(error);}
    );
  }

}
