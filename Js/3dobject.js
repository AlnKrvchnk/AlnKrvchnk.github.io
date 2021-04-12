scene=new THREE.Scene();
camera=new THREE.PerspectiveCamera(10,window.innerWidth/window.innerHeight);
camera.position.z=10;

camera.lookAt(scene.position);
renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
renderer.setClearColor(0x000000,0);

 var mydiv = document.createElement("div");
mydiv.setAttribute("class","plane position-absolute w-100 h-100 m-auto");
renderer.domElement.setAttribute("id","Plane");
renderer.domElement.setAttribute("class"," w-100 h-100 ");

 mydiv.appendChild(renderer.domElement);
 document.body.insertBefore(mydiv,document.body.lastChild);
const aLight=new THREE.AmbientLight(0xffffff,1.2);
scene.add(aLight);
const bLight=new THREE.AmbientLight(0xffffff,1.2);
bLight.position.set(0,-3,7);
scene.add(bLight);

let loader=new THREE.GLTFLoader();
let earth=null;

loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf' ,function(gLtf){
    earth=gLtf;
    earth.scene.scale.set(0.5,0.5,0.5);
    earth.scene.position.set(0, -5, -10);
    scene.add(earth.scene);
})
loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/39255/ladybug.gltf' ,function(gLtf){
    plane=gLtf;
    plane.scene.scale.set(0.5,0.5,0.5);
    plane.scene.position.set(1, -5, -5);
    scene.add(plane.scene);
})
function animate(){
    requestAnimationFrame(animate);
    if(earth){
        earth.scene.rotation.y+=0.03;
    }
    renderer.render(scene,camera);
}
animate();


