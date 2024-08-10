"use client";

import Carousel from "react-bootstrap/Carousel";
import cover_1 from "/public/covers/cover-2.jpg";
import cover_2 from "/public/covers/cover-3.jpg";
import cover_3 from "/public/covers/cover-4.jpg";
import cover_4 from "/public/covers/cover-5.jpg";
import cover_5 from "/public/covers/cover-9.jpg";
import cover_6 from "/public/covers/cover-7.jpg";
import cover_7 from "/public/covers/cover-11.jpg";
import Image from "next/image";

function HomeCarousel() {
  return (
    <Carousel controls={false} fade>
      <Carousel.Item className="full-screen cover-container">
        <Image
          src={cover_3}
          alt="pcz logo"
          quality={100}
          className="image-top"
        />
        <Carousel.Caption>
          <h3>{`"Rejoice in the Lord always; again I will say, rejoice!"`}</h3>
          <p>Philippians 4:4</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="full-screen cover-container">
        <Image src={cover_7} alt="pcz logo" quality={100} />
        <Carousel.Caption>
          <h3>{`"Glorify the Lord with me; let us exalt his name together"`}</h3>
          <p>Psalm 34:3</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="full-screen cover-container">
        <Image src={cover_2} alt="pcz logo" quality={100} />
        <Carousel.Caption>
          <h3>
            {`"I was glad when they said to me, 'Let us go to the house of the
            Lord!'"`}
          </h3>
          <p>Psalm 122:1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="full-screen cover-container">
        <Image src={cover_1} alt="pcz logo" quality={100} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="full-screen cover-container">
        <Image
          src={cover_4}
          alt="pcz logo"
          quality={100}
          className="image-top"
        />
        <Carousel.Caption>
          <h3>
            {`"For where two or three are gathered in my name, there am I among
            them."`}
          </h3>
          <p>Matthew 18:20</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="full-screen cover-container">
        <Image
          src={cover_5}
          alt="pcz logo"
          quality={100}
          style={{ objectPosition: "50% 20%" }}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="full-screen cover-container">
        <Image
          src={cover_6}
          alt="pcz logo"
          quality={100}
          className="image-top"
        />
        <Carousel.Caption>
          <h3>{`"Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!"`}</h3>
          <p>Matthew 21:9</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
