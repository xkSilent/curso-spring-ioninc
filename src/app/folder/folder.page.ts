import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public navCtrl:NavController) { }


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  login(){
    this.navCtrl.navigateForward('categorias');
  }
}
