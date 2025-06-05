import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "@emotion/react";


const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  const [particleCount, setParticleCount] = useState(100);

  useEffect(() => {
    const updateParticles = () => {
      const isMobile = window.innerWidth < 768;
      setParticleCount(isMobile ? 85 : 150);
    };

    updateParticles();
    window.addEventListener("resize", updateParticles);
    return () => window.removeEventListener("resize", updateParticles);
  }, []);
  

    const theme = useTheme(); 

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: particleCount,
          },
          color: {
            value: theme.particules,
          },
          links: {
            enable: true,
            color: "",
            distance: 120,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
          },
          size: {
            value: 3,
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
      }}
    />
  );
};

export default ParticlesBackground;
