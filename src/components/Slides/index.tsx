import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import './styles.module.css'

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';
import { Center, Image } from "@chakra-ui/react";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export function Slides() {
  return (
    <>
      <Swiper pagination={{"type": "bullets"}} navigation={true} className="mySwiper">    
        <SwiperSlide>
          <Center>
            <Image objectFit="cover" backgroundSize="100%" src="/images/slide/slide1.jpg"/>
          </Center>
        </SwiperSlide>

        <SwiperSlide>
          <Center>
            <Image objectFit="cover" src="/images/slide/slide1.jpg"/>
          </Center>
        </SwiperSlide>

        <SwiperSlide>
          <Center>
            <Image objectFit="cover" src="/images/slide/slide1.jpg"/>
          </Center>
        </SwiperSlide>

        <SwiperSlide>
          <Center>
            <Image objectFit="cover" src="/images/slide/slide1.jpg"/>
          </Center>
        </SwiperSlide>
      </Swiper>
    </>
  )
}