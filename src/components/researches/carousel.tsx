import { useState, useRef, TouchEvent, useEffect } from "react";
import { Box, Button } from "@mui/material";
import ResearchCard from "@/components/researches/research-card";

interface CarouselItem {
  name: string;
  id: number;
  status: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [numberScroll, setNumberScroll] = useState<number>(0);
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

  useEffect(() => {
    const getSizeContainer = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.clientWidth;
        const containerHeight = carouselRef.current.clientHeight;
        carouselRef.current.style.height = `${containerHeight}px`;

        setNumberScroll(
          Math.ceil((cardWidth * (items.length + 1)) / containerWidth)
        );
      }
    };

    getSizeContainer();

    window.addEventListener("resize", getSizeContainer);

    return () => {
      window.removeEventListener("resize", getSizeContainer);
    };
  }, [items]);

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

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
        {items.map((item) => (
          <ResearchCard
            key={item.id}
            sx={{
              flexShrink: 0,
              scrollSnapAlign: "start",
              p: 2,
            }}
            title={item.name}
            active={item.status === "Em Campo"}
            draft={item.status === "Rascunho"}
          />
        ))}
        <ResearchCard
          key={items.length}
          sx={{
            flexShrink: 0,
            scrollSnapAlign: "start",
            p: 2,
          }}
          title={"Ver todas"}
        />
      </Box>

      <Box
        sx={{
          display: numberScroll === 1 ? "none" : "flex",
          justifyContent: "center",
          gap: 4,
          mt: 6,
        }}
      >
        {Array.from({ length: numberScroll }).map((_, index) => (
          <Button
            key={index}
            onClick={() => scrollToIndex(index)}
            sx={{
              minWidth: 12,
              borderRadius: "50%",
              bgcolor: index === currentIndex ? "primary.main" : "grey.300",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
