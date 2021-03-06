import * as THREE from 'three';
import {
    Interaction
} from 'three.interaction';

export default class Cubesat {
    constructor(scene, earth) {
        this.earth = earth;
        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(0.25, 0.25/3, 0.25/3),
            new THREE.MeshBasicMaterial({
                color: 0x888888
            }),
        );
        this.cube.position.y = 1.5;

        scene.add(this.cube);
        console.log(scene);

        // this.indicator = document.getElemenyById('cubesat-indicator');
    }

    update(t) {
        this.cube.material.color.setHex(this.hover ? 0xbbb : 0x888);
        if(this.earth){
            this.cube.position.z = -Math.sin(t / 10000) * 1.5;
            this.cube.position.y = -Math.cos(t / 10000) * 1.5;
            this.cube.lookAt(this.earth.position);
        }
    }
}