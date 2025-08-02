<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/js/controls/OrbitControls.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/examples/js/loaders/STLLoader.js"></script>
<script>
function initSTLViewer(el){
  const url = el.dataset.stl, w = el.clientWidth, h = 360;
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(45, w/h, 0.1, 1000);
  const ren = new THREE.WebGLRenderer({antialias:true,alpha:true});
  ren.setSize(w,h); el.appendChild(ren.domElement);
  scene.add(new THREE.HemisphereLight(0xffffff,0x444444,1));
  const dir = new THREE.DirectionalLight(0xffffff,0.6); dir.position.set(3,5,7); scene.add(dir);
  const grid = new THREE.GridHelper(10,10); grid.position.y = -1; scene.add(grid);
  cam.position.set(3,2,6);
  const ctl = new THREE.OrbitControls(cam, ren.domElement);
  new THREE.STLLoader().load(url, geo=>{
    geo.center(); const mtl = new THREE.MeshStandardMaterial({metalness:0.1,roughness:0.8});
    scene.add(new THREE.Mesh(geo, mtl)); animate();
  });
  function animate(){ requestAnimationFrame(animate); ctl.update(); ren.render(scene,cam); }
}
document.addEventListener('DOMContentLoaded',()=>{ document.querySelectorAll('[data-stl]').forEach(initSTLViewer); });
</script>
