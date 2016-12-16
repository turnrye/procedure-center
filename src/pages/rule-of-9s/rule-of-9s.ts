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

    loader.load('assets/standard-male-figure.json', function (obj) {
      scene.add(obj);
    });

/*    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;*/ // need to figure out how to incldue orbitcontrols

    camera.position.z = 25;

    function render() {
    	requestAnimationFrame( render );
    	renderer.render( scene, camera );
    }
    render();
  }

}
