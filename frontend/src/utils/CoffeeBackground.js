import * as THREE from "three";

export function initCoffeeBackground(containerSelector) {
  const container = document.querySelector(containerSelector);

  if (!container) return; // Exit if the container is not found

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });

  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  camera.position.z = 5;

  const coffeeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
  const coffeeMaterial = new THREE.MeshBasicMaterial({ color: "#D2B48C" }); // Light brown color
  const coffeeBeans = [];

  for (let i = 0; i < 100; i++) {
    const coffeeBean = new THREE.Mesh(coffeeGeometry, coffeeMaterial);
    coffeeBean.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
    scene.add(coffeeBean);
    coffeeBeans.push(coffeeBean);
  }

  function animate() {
    requestAnimationFrame(animate);

    coffeeBeans.forEach((bean) => {
      bean.rotation.x += 0.01;
      bean.rotation.y += 0.01;
      bean.position.y -= 0.02; // Falling effect
      if (bean.position.y < -5) {
        bean.position.y = 5; // Reset position when it goes out of view
      }
    });

    renderer.render(scene, camera);
  }

  animate();
}
