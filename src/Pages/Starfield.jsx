import { useRef, useEffect } from "react";

const Starfield = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    let comets = [];

    const STAR_COUNT = 200;
    const COMET_COUNT = 5;

    // Initialize stars
    const createStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.5 + 0.2,
        alpha: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      }));
    };

    // Initialize one comet
    const createComet = () => ({
      x: Math.random() * canvas.width,
      y: 0,
      speedX: 3 + Math.random() * 2,
      speedY: 1 + Math.random() * 1.5,
      tailSegments: 20,
      positions: [],
    });

    const init = () => {
      createStars();
      comets = Array.from({ length: COMET_COUNT }, createComet);
    };

    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Black background
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0) star.twinkleSpeed *= -1;

        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        star.x += star.speedX;
        star.y += star.speedY;

        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
      });

      // Draw comets
      comets.forEach((comet, index) => {
        comet.positions.push({ x: comet.x, y: comet.y });
        if (comet.positions.length > comet.tailSegments) {
          comet.positions.shift();
        }

        // Tail
        for (let i = 0; i < comet.positions.length; i++) {
          const pos = comet.positions[i];
          const alpha = (i + 1) / comet.positions.length;
          ctx.globalAlpha = alpha * 0.5;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.5})`;
          ctx.lineWidth = 2;
          ctx.moveTo(pos.x, pos.y);
          if (i < comet.positions.length - 1) {
            ctx.lineTo(comet.positions[i + 1].x, comet.positions[i + 1].y);
          }
          ctx.stroke();
        }

        // Head
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 10;
        ctx.arc(comet.x, comet.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Move comet
        comet.x += comet.speedX;
        comet.y += comet.speedY;

        // Reset comet if out of bounds
        if (comet.x > canvas.width || comet.y > canvas.height) {
          comets[index] = createComet();
        }
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default Starfield;
