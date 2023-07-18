import { Fragment } from 'react';
import style from './VideoGallery.module.scss';
import YouTube from 'react-youtube';

const videoLinks = ['tUbVTSHVkTU', '0Eq36hXvPTg', '_vybgUqHdnw'];

export default function VideoGallery() {
  return (
    <div className={style.wrap}>
      {videoLinks.map((el, index) => {
        return (
          <Fragment key={index}>
            <YouTube
              iframeClassName={style.iFrame}
              className={style.video}
              videoId={el}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
