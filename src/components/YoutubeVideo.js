import React from 'react'
import styles from './YoutubeVideo.module.css'

export default function YoutubeVideo({url}) {
  return (
    <div className={styles.video}>
        <iframe
            src={url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="">
        </iframe>
    </div>
  );
}
