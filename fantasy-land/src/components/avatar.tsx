import React, { useEffect, useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";


// Define the Player type
interface Player {
  name: string;
  number: string;
  primaryColor: string;
  secondaryColor: string;
  outlineColor: string;
}

interface PlayerAvatarProps {
  player: Player;
}

export const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ player }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");

  // Function to load custom font
  const loadFont = async (): Promise<void> => {
    const font = new FontFace("Graduate", `url('https://fonts.gstatic.com/s/fjallaone/v15/Yq6R-LCAWCX3-6Ky7FAFrOx6kigt.woff2')`);
    await font.load();
    document.fonts.add(font); // Add the font to the document
  };
  // Function to generate player image
  const generatePlayerImage = async(
    canvas: HTMLCanvasElement,
    number: string,
    primaryColor: string,
    secondaryColor: string,
    outlineColor: string
  ): Promise<string> => {
     await loadFont(); // Ensure the font is loaded

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Failed to get canvas context");
      return "";
    }

    const size = canvas.width; 
    const centerX = size / 2;
    const centerY = size / 2;

    // Draw background circle
    ctx.fillStyle = primaryColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2);
    ctx.fill();

    // Configure text styles
    const fontSize = size * 0.5;
    ctx.font = `bold ${fontSize}px 'Fjalla One'`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Calculate vertical adjustment (optional, depending on the font)
    const verticalAdjustment = fontSize * 0.1; // Fine-tune if necessary
    const horizontalAdjustment = fontSize * 0.01; // Fine-tune if necessary

    // Draw text outline
    ctx.lineWidth = fontSize * 0.1; // Outline thickness
    ctx.strokeStyle = outlineColor;
    ctx.strokeText(number, centerX + horizontalAdjustment, centerY + verticalAdjustment);

    // Draw text fill
    ctx.fillStyle = secondaryColor;
    ctx.fillText(number, centerX + horizontalAdjustment, centerY + verticalAdjustment);

    // Export as data URL
    return canvas.toDataURL();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      (async () => {
        const src = await generatePlayerImage(
          canvas,
          player.number,
          player.primaryColor,
          player.secondaryColor,
          player.outlineColor
        );
        setImageSrc(src); // Set the generated image as the Avatar source
      })();
    }
  }, [player]);

  return (
   
      <Avatar
        alt={player.name}
        src={imageSrc}
        sx={{ width: 50, height: 50 }}
      > <canvas
        ref={canvasRef}
        width={200}
        height={200}
        style={{ display: "none" }}
      ></canvas>
    </Avatar>
   
  );
};


