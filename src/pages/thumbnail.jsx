import { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { SplitText } from ".././components/ui/SplitText";

const Thumbnail = () => {
  const row1 = [
    "/skills.jpg",
    "/thumbnail-2.jpeg",
    "/thumbnail-3.jpg",
    "/thumbnail-4.jpg",
    "/thumbnail-5.jpg",
    "/dsa.jpg",
    "/thumbnail-7.jpg",
    "/budget.jpg",
  ];

  const row2 = [
    "/zepto.jpg",
    "/thumbnail-10.jpeg",
    "/thumbnail-11.jpg",
    "/thumbnail-12.jpg",
    "/thumbnail-13.jpg",
    "/thumbnail-14.jpg",
    "/thumbnail-16.jpg",
    "/thumbnail-17.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <AppContainer id="thumbnail">
      <Wrapper>
        <div className="relative flex items-center justify-center mb-32">
          <h1 className="text-5xl md:text-8xl font-bold text-gray-200">
            THUMBNAILS
          </h1>
          <div className="absolute md:top-12 top-4 md:text-6xl text-4xl text-gray-700 font-bold mb-8 text-center">
            <SplitText text="Thumbnails" className="custom-class" delay={50} />
          </div>
        </div>

        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index} onClick={() => openModal(el)}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index} onClick={() => openModal(el)}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>

        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index} onClick={() => openModal(el)}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index} onClick={() => openModal(el)}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>

      {selectedImage && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>✕</CloseButton>
            <ModalImage src={selectedImage} alt="Selected thumbnail" />
          </ModalContent>
        </Modal>
      )}
    </AppContainer>
  );
};

export default Thumbnail;

// Styled Components
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
  box-sizing: border-box;
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;
  cursor: pointer;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Image = styled.img`
  border: 5px solid #ccc;
  object-fit: cover;
  width: 50vw;
  height: 15vw;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 768px) {
    width: 90vw;
    height: 25vw;
  }

  @media (max-width: 480px) {
    width: 60vw;
    height: 40vw;
  }
`;

const fadeIn = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.4s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #ffffff;
`;

const ModalImage = styled.img`
  width: 80vw;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;
