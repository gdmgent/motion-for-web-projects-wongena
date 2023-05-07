const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.classList.add("starContainer");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);

      const stars = [];
      const starCount = 300;

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1,
          color: "white",
          speed: Math.random() * 0.05,
        });
      }

      function drawStars() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < starCount; i++) {
          const star = stars[i];

          context.beginPath();
          context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          context.fillStyle = star.color;
          context.fill();

          star.x -= star.speed;

          if (star.x < -star.radius) {
            star.x = canvas.width + star.radius;
          }
        }

        requestAnimationFrame(drawStars);
      }

      drawStars();