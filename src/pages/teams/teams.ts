import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeamDetailPage} from "../team-detail/team-detail";

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams=[
    {name: "equipo1"},
    {name: "equipo2"},
    {name: "equipo3"},
    {name: "equipo4"},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  teamTapped($event: MouseEvent, item: { name: string }) {
    this.navCtrl.push(TeamDetailPage, item);
  }
}
