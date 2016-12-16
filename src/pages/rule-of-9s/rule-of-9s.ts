import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as THREE from 'three';

/*
  Generated class for the RuleOf9s page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rule-of-9s',
  templateUrl: 'rule-of-9s.html'
})
export class RuleOf9sPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RuleOf9sPage Page');
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    scene.background = new THREE.Color( 0xffffff );
    var renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById( "container" ).appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    function render() {
    	requestAnimationFrame( render );
    	renderer.render( scene, camera );
    }
    render();
  }

}
