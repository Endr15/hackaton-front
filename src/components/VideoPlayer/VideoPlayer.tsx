import { FC } from 'react'
import { usePlayer } from './usePlayer'
import styles from './VideoPlayer.module.scss'
import cn from 'classnames'
import { IoPause, IoPlay } from 'react-icons/io5'
import { BsFullscreen } from 'react-icons/bs'

const VideoPlayer: FC<{ videoPath: string }> = ({ videoPath }) => {
	const { videoRef, toggleVideo, status, fullScreen } = usePlayer()

	return (
		<div className={styles.wrapper}>
			<video
				ref={videoRef}
				className={styles.player}
				src={videoPath}
				preload='metadata'
				onClick={toggleVideo}
			/>

			<div
				className={cn(styles.controls, {
					[styles.hide]: status.isPlaying,
				})}
			>
				<button onClick={toggleVideo}>
					{status.isPlaying ? <IoPause /> : <IoPlay />}
				</button>

				<div className={styles.progressBarWrapper}>
					<div
						className={styles.progressBar}
						style={{ width: `${status.progress}%` }}
					></div>

					<div className={styles.timeControls}>
						<p>
							{Math.floor(status.currentTime / 60) +
								':' +
								('0' + Math.floor(status.currentTime % 60)).slice(-2)}
						</p>
						<p> / </p>

						<p>
							{Math.floor(status.videoTime / 60) +
								':' +
								('0' + Math.floor(status.currentTime % 60)).slice(-2)}
						</p>
					</div>

					<button onClick={fullScreen}>
						<BsFullscreen className='text-tiny' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default VideoPlayer
