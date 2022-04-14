import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { API_CONFIG } from 'src/config/api.config';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { CategoriaService } from '../services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  bucketUrl: String = API_CONFIG.baseBucketUrl;
 
  items: CategoriaDTO[];

  constructor( public categoriaService: CategoriaService, public menu: MenuController) { }

  ngOnInit() {
    this.categoriaService.findAll().subscribe(response => { 
      this.items = response;
    }, 
    error => {}
    );
  }

  ionViewDidLoad(){
    
   
  }

}
