"use client";

import { useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

interface SplineEmbedProps {
  scene: string;
}

export function SplineEmbed({ scene }: SplineEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleLoad = (spline: any) => {
    try {
      const sceneObj = spline?.scene;
      if (!sceneObj) return;

      sceneObj.traverse((obj: any) => {
        const name = (obj.name || "").toString();
        if (
          /plane|ground|background|back|floor|shadow|base|plate|board/i.test(
            name,
          )
        ) {
          obj.visible = false;
        }
        if (obj.material) {
          try {
            obj.material.transparent = true;
            obj.material.opacity = 0;
          } catch (e) {
            // ignore
          }
        }
      });

      try {
        if (
          spline.renderer &&
          typeof spline.renderer.setClearColor === "function"
        ) {
          spline.renderer.setClearColor(0x000000, 0);
        }
        sceneObj.background = null;
      } catch (e) {
        // ignore
      }
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const makeTransparent = () => {
      const canvases = el.querySelectorAll("canvas");
      canvases.forEach((c) => {
        (c as HTMLCanvasElement).style.background = "transparent";
        (c as HTMLCanvasElement).style.backgroundColor = "transparent";
      });

      const iframes = el.querySelectorAll("iframe");
      iframes.forEach((i) => {
        (i as HTMLIFrameElement).style.background = "transparent";
        (i as HTMLIFrameElement).style.backgroundColor = "transparent";
      });
    };

    makeTransparent();
    const observer = new MutationObserver(makeTransparent);
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[690px] h-[700px] -mb-[70px] -mt-[190px] -ml-[50px] -mr-[50px] rounded-full overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 100%)",
      }}
    >
      <Spline
        scene={scene}
        onLoad={handleLoad}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      />
    </div>
  );
}
