
angular.module('Cube', [])
  .directive('cube', function ($window) {
    return {
      restrict: 'E',
      templateUrl: 'components/cube/cube.html',
      css: 'components/cube/cube.css',
      scope: {
        positionY: '=',
        scale: '=',
        weight: '=',
        depth: '=',
        positionX: '=',
        material: '='
      },
      link: function (scope, element, attrs) {

        var cube, geometry, material;

        // revolutions per second
        var angularSpeed = 0.2; 
        var lastTime = 0;
   
        // this function is executed on each animation frame
        function animate() {

          // update
          var time = (new Date()).getTime();
          var timeDiff = time - lastTime;
          var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 2000;
          cube.rotation.y += angleChange;
          lastTime = time;
   
          // render
          renderer.render(scene, camera);
   
          // request new frame
          requestAnimationFrame(function(){
              animate();
          });

        }

        // renderer
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor('0x000000', 0);
        renderer.setSize($window.innerWidth, $window.innerHeight);

        element.append(renderer.domElement);

        // camera
        var camera = new THREE.PerspectiveCamera(45, $window.innerWidth / $window.innerHeight, 1, 1000);
        camera.position.z = 500;
   
        // scene
        var scene = new THREE.Scene();

        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0x000000);
        scene.add(ambientLight);
        
        // directional lighting
        var directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(-1, 1, 1).normalize();
        scene.add(directionalLight);
                  
        // cube
        geometry = new THREE.CubeGeometry(70, 70, 70);
        material = new THREE.MeshDepthMaterial();
        cube = new THREE.Mesh(geometry, material);

        cube.castShadow = true;

        cube.overdraw = true;
        scene.add(cube);

        // start animation
        animate();

        scope.$watch('positionY', function (position) {
          switch (position) {
            case 1: 
              cube.position.y = 60;
              break;
            case 2: 
              cube.position.y = -110;
              break;
            case 3: 
              cube.position.y = 0;
              break;
          }
        });

        scope.$watch('scale', function (scale) {
          switch (scale) {
            case 1: 
              cube.scale.x = 1.5;
              cube.scale.y = 1.5;
              cube.scale.z = 1.5;
              break;
            case 2: 
              cube.scale.x = 0.5;
              cube.scale.y = 0.5;
              cube.scale.z = 0.5;
              break;
          }
        });

        scope.$watch('weight', function (weight) {
          /*switch (weight) {
            case 1: 
              cube.position.y = 10;
              break;
            case 2: 
              cube.position.y = 0;
              break;
          }*/
        });

        scope.$watch('depth', function (valign) {
          // switch (valign) {
          //   case 1: cube.material = 
          // }
        });

        scope.$watch('positionX', function (position) {
          switch (position) {
            case 1: 
              cube.position.x = 0;
              break;
            case 2: 
              cube.position.x = 200;
              break;
          }
        });

        scope.$watch('material', function (material) {
          switch (material) {
            case 1: // Transparent
              cube.material = new THREE.MeshLambertMaterial({
                side: THREE.DoubleSide,
                opacity: 0.3,
                transparent: true, 
                map: THREE.ImageUtils.loadTexture('img/textures/glass.jpg')
              });
              break;
            case 2: // Ice melting
              cube.material = new THREE.MeshLambertMaterial({
                opacity: 0.9,
                transparent: true, 
                map: THREE.ImageUtils.loadTexture('img/textures/ice2.jpg')
              });
              break;
            case 3: // Stone polished
              cube.material = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('img/textures/stone1.jpg')
              });
              break;
            case 4: // Stone rounded
              cube.material = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('img/textures/stone2.jpg')
              });
              break;
            case 5: // Black
              cube.material = new THREE.MeshLambertMaterial({
                map: THREE.ImageUtils.loadTexture('img/textures/black.jpg')
              });
              break;
            case 6: // White
              cube.material = new THREE.MeshLambertMaterial({ color: 'white' });
              break;
            case 7: // Yellow
              cube.material = new THREE.MeshLambertMaterial({ color: 'yellow' });
              break;
            case 8: // Red
              cube.material = new THREE.MeshLambertMaterial({ color: 'red' });
              break;
            case 9: // Green
              cube.material = new THREE.MeshLambertMaterial({ color: 'green' });
              break;
            case 10: // Blue
              cube.material = new THREE.MeshLambertMaterial({ color: 'blue' });
              break;
            case 11: // Purple
              cube.material = new THREE.MeshLambertMaterial({ color: 'purple' });
              break;
            case 12: // Brown
              cube.material = new THREE.MeshLambertMaterial({ color: 'brown' });
              break;
          }
        });

      }
    }
  });