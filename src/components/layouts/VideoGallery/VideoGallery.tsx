import style from './VideoGallery.module.scss';
import YouTube from 'react-youtube';

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const videoLinks = [
  "tUbVTSHVkTU",
  "0Eq36hXvPTg",
  "_vybgUqHdnw"
]

export default function VideoGallery () {

  return (
    <div
      className={style.wrap}
    >

      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}

        className={style.mySwiper}
      >
        {
          videoLinks.map((el, index) => {
            return (
              <SwiperSlide
                key={index}
                className={style.mySwiper__item}
              >
                <YouTube
                  iframeClassName={style.iFrame}
                  className={style.video}
                  videoId={el}
                />
              </SwiperSlide>
            )
          } )
        }
      </Swiper>
    </div>
  );
}