import * as THREE from 'three';
import { RegisterView, ThreeRenderer, ThreeScene } from '@krox/three';

@RegisterView('ThreeUIScene')
export default class ThreeUIScene extends ThreeScene {
  beforeRender(threeRenderer: ThreeRenderer) {
    threeRenderer.renderer.clearDepth();
  }

  override createView() {
    this.view = new THREE.Scene();

    this.activeCamera = new THREE.OrthographicCamera(-700, 700, 300, -300, -1, 10);
    this.activeCamera.position.z = 10;

    this.view.add(this.activeCamera);
  }
}