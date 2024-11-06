import { useState, useRef, TouchEvent } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ResearchCard from "@/components/researches/research-card";

interface CarouselItem {
  title: string;
  status: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const cardWidth = 230;

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollPosition =
        index === items.length - 1
          ? carouselRef.current.scrollWidth - carouselRef.current.clientWidth
          : index * cardWidth;

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  // Funções de toque
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;
    if (swipeDistance > swipeThreshold) {
      handleNext();
    } else if (swipeDistance < -swipeThreshold) {
      handlePrev();
    }
  };

  return (
    <Box
      sx={{ position: "relative", width: "100%", overflow: "hidden", px: 2 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          scrollSnapType: "x mandatory",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          gap: 6,
        }}
      >
        {items.map((item, index) => (
          <ResearchCard
            key={index}
            sx={{
              flexShrink: 0,
              scrollSnapAlign: "start",
              p: 2,
            }}
            title={item.title}
            active={item.status === "active"}
            draft={item.status === "draft"}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: { xs: "flex", sm: "flex",  xl: "none" },
          justifyContent: "center",
          gap: 4,
          mt: 6,
        }}
      >
        {items.map((_, index) => (
          <Button
            key={index}
            onClick={() => scrollToIndex(index)}
            sx={{
              minWidth: 6,
              height: 6,
              borderRadius: "50%",
              mx: 0.6,
              bgcolor: index === currentIndex ? "primary.main" : "grey.300",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
