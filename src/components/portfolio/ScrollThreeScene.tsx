import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollThreeScene({ root }: { root: HTMLElement | null }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !root) return;

    const media = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    if (!media.matches) return;

    let disposed = false;
    let cleanup = () => {};

    const start = async () => {
      const THREE = await import("three");
      if (disposed || !mount.isConnected) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0, 7);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      scene.add(group);

      const shellGeometry = new THREE.IcosahedronGeometry(1.55, 2);
      const shellMaterial = new THREE.MeshBasicMaterial({
        color: 0xc6f24e,
        wireframe: true,
        transparent: true,
        opacity: 0.13,
      });
      const shell = new THREE.Mesh(shellGeometry, shellMaterial);
      shell.rotation.set(0.45, -0.25, 0.16);
      group.add(shell);

      const coreGeometry = new THREE.IcosahedronGeometry(0.92, 1);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x7dd3fc,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      core.rotation.set(-0.3, 0.4, -0.1);
      group.add(core);

      const count = 180;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i += 1) {
        const radius = 2.7 + Math.random() * 3.7;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.016,
        transparent: true,
        opacity: 0.22,
        sizeAttenuation: true,
      });
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      group.add(particles);

      const render = () => renderer.render(scene, camera);

      const resize = () => {
        const width = mount.clientWidth || window.innerWidth;
        const height = mount.clientHeight || window.innerHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(1, height);
        camera.updateProjectionMatrix();
        render();
      };
      resize();

      group.position.set(1.25, 0.3, -0.4);

      const scrollTween = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
        onUpdate: render,
      });

      scrollTween
        .to(group.rotation, { x: 1.05, y: 2.2, z: 0.35 }, 0)
        .to(group.position, { x: -1.1, y: -0.9, z: -1.5 }, 0)
        .to(shellMaterial, { opacity: 0.07 }, 0.55)
        .to(coreMaterial, { opacity: 0.13 }, 0.55)
        .to(particles.rotation, { y: -1.25, x: 0.45 }, 0);

      const pointer = { x: 0, y: 0 };
      const onPointerMove = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.28;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.2;
        gsap.to(shell.rotation, {
          x: 0.45 + pointer.y,
          y: -0.25 + pointer.x,
          duration: 0.55,
          ease: "power3.out",
          overwrite: true,
          onUpdate: render,
        });
      };

      window.addEventListener("resize", resize, { passive: true });
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      render();

      cleanup = () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onPointerMove);
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
        shellGeometry.dispose();
        shellMaterial.dispose();
        coreGeometry.dispose();
        coreMaterial.dispose();
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    const schedule = () => {
      if ("requestIdleCallback" in window) {
        const id = window.requestIdleCallback(() => void start(), { timeout: 700 });
        cleanup = () => window.cancelIdleCallback(id);
      } else {
        const id = window.setTimeout(() => void start(), 120);
        cleanup = () => window.clearTimeout(id);
      }
    };

    schedule();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [root]);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block"
      aria-hidden="true"
      style={{ opacity: 0.85 }}
    />
  );
}
