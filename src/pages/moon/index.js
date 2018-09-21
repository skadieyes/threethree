import React from 'react';
import THREE from 'three'

let camera,
    scene,
    renderer,
    cube;

class Moon extends React.Component {
    constructor() {
        super();
        this.scence();
    }
    render() {
        return <div onClick={this.riseUp.bind(this)}>11111111111</div>;
    }
    scence() {
        camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.01, 10);
        camera.position.z = 5;

        scene = new THREE.Scene();

        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        let hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9);
        let ambientLight = new THREE.AmbientLight(0xdc8874, .5);
        scene.add(hemisphereLight);
        scene.add(ambientLight);
        renderer.render(scene, camera);
        document.body.appendChild(renderer.domElement);
        renderer.render(scene, camera);
    }
    riseUp() {
        cube.rotation.x += 1;
        cube.position.y += 0.1;
        cube.rotation.y += 1;
        renderer.render(scene, camera);
        requestAnimationFrame(this.riseUp.bind(this));
    }
}

export default Moon;
