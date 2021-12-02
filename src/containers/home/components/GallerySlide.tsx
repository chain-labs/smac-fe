import Box from "src/components/Box";
import Image from "next/image";
import { useEffect, useState } from "react";

// TODO: make an efficient way to animate the slideshow

const GallerySlide = () => {
  const [arr, setArr] = useState([...Array(10)].map((_, i) => i + 1));
  const [count, setCount] = useState(0);

  useEffect(() => {
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
      console.log(slider);
    }
  }, [count]);

  return (
    <Box>
      <Box
        id="slider"
        mt="22.5rem"
        row
        height="auto"
        minWidth="10000rem"
        css={`
          transform: translate3d(0, 0, 0);
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-200%);
            }
          }

          animation: slide 3500s linear infinite;
        `}
      >
        {arr.map((_, i) => (
          <Box
            key={i * i}
            id={`spaceman-${i}`}
            position="relative"
            height={{ tabS: "37rem", deskL: "40rem" }}
            width={{ tabS: "37rem", deskL: "40rem" }}
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
