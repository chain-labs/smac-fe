import Box from "src/components/Box";
import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryAnimation } from "../animations";

// TODO: make an efficient way to animate the slideshow

const GallerySlide = () => {
  const [arr, setArr] = useState([...Array(10)].map((_, i) => i + 1));
  const [count, setCount] = useState(0);

  useEffect(() => {
    galleryAnimation();
    const id = setInterval(() => setCount((count) => count + 1), 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      const img = document
        .getElementById(`img-spaceman-${(count - 1) % 10}`)
        .cloneNode();
      const img_wrap = document
        .getElementById(`spaceman-${(count - 1) % 10}`)
        .cloneNode();
      img_wrap.appendChild(img);
      const slider = document.getElementById("slider");
      slider.appendChild(img_wrap);
    }
  }, [count]);

  return (
    <Box mb={{ mobS: "wl", tabS: "wxl", deskM: "28rem" }}>
      <Box
        id="slider"
        mt={{ mobS: "wl", tabS: "wxl", deskM: "22.5rem" }}
        row
        height="auto"
        minWidth="10000rem"
      >
        {arr.map((_, i) => (
          <Box
            key={i * i}
            id={`spaceman-${i}`}
            position="relative"
            height={{ mobS: "25rem", tabS: "37rem", deskL: "40rem" }}
            width={{ mobS: "25rem", tabS: "37rem", deskL: "40rem" }}
            mr="mxl"
          >
            <Image
              id={`img-spaceman-${i}`}
              src={`/static/images/spaceman-${arr[i]}.jpeg`}
              layout="fill"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GallerySlide;
