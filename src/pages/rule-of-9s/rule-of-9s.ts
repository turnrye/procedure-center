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

    var loader = new THREE.ObjectLoader();
    var cube;
    loader.load('assets/standard-male-figure.json', function (obj) {
      cube = obj;
      obj.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
          //child.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );;
        }
      });
      scene.add(obj);
    });

    var dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(100, 100, 50);
    scene.add(dirLight);

    camera.position.set(0,10,15);

    var render = function () {
      requestAnimationFrame( render );

      if(cube != null) cube.rotation.y += 0.025;

      renderer.render(scene, camera);
    };

    render();
  }

}
