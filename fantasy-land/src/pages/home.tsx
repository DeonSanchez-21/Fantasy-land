import { Box, IconButton } from "@mui/material"
import Rank_list from "../components/rank_list"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useRef, useState } from "react";


const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to initialize the YouTube Player
      const onYouTubeIframeAPIReady = () => {
        const player = new window.YT.Player("youtube-video", {
          videoId: "yOIEotJqyIQ", 
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: "yOIEotJqyIQ", // Required for looping the video
          },
          events: {
            onReady: (event:any) => {
              event.target.setPlaybackRate(.75); // Set playback speed to 0.75x
            },
          },
        });
      };
      // Load the YouTube API if not already loaded
      if (window.YT) {
        onYouTubeIframeAPIReady();
      } else {
        // Dynamically load the YouTube IFrame API script
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        script.onload = () => {
          window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        };
        document.body.appendChild(script);
      }
    }, []);

    useEffect(() => {
      const container = containerRef.current;

      const onScroll = () => {
        if (container) {
          const scrollTop = container.scrollTop || 0;
          setShowScrollButton(scrollTop > 200); // Show button after scrolling 200px
        }
      };

      // Handle scroll effect
      const onWheel = (event: WheelEvent) => {
        if (container) {
          container.scrollBy({
            top: event.deltaY,
            behavior: "smooth",
          });
        }
      };

      // Add event listener for mouse wheel
      container?.addEventListener("scroll", onScroll);
      window.addEventListener("wheel", onWheel, { passive: false });

      return () => {
        container?.removeEventListener("scroll", onScroll);
        window.removeEventListener("wheel", onWheel);
      };
    }, []);

    const scrollToTop = () => {
      const container = containerRef.current;
      if (container) {
        container.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

  return (
    <Box ref={containerRef} sx={{ position: 'relative', overflow: 'hidden', height: '100vh', m:0 , width:'100%', }}>
      <div
        id="youtube-video"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          zIndex: -1,
          pointerEvents: "none",

        }}
      ></div>
      <Rank_list/>
      {showScrollButton && (
        <IconButton
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 10,
          }}
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </Box>
  )
}

export default Home

