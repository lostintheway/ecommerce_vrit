import Image from "next/image";
import React from "react";
import "@/styles/zoomedImage.css";

type Props = {
  closeZoomedImage: () => void;
  zoomedImage: string;
};

const ZoomedImage = ({ closeZoomedImage, zoomedImage }: Props) => {
  return (
    <div>
      <div className="zoomed-image-container" onClick={closeZoomedImage}>
        <Image
          src={zoomedImage}
          alt="zoomed-image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ZoomedImage;
