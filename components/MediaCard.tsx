import React, { FC } from "react"
import Image from 'next/image'
import Link from 'next/link'
import DoubleTap from "./DoubleTap"
import { dayjs } from "../utils/dayjs"
import useToggleLike from "../hooks/useToggleLike"
import PhotoInterface from "../interfaces/PhotoInterface"
import { Routes } from "routes"

type Props = {
	asset: PhotoInterface
	hideHeader?: boolean
}

const MediaCard: FC<Props> = ({ asset, hideHeader }) => {
	const { toggleLike } = useToggleLike()

	const video = React.useRef(null)
	const [status, setStatus] = React.useState({})

	const handleToggleLike = () => {
		const { liked_by_me } = asset

		toggleLike({ photo_id: asset?.id })

		asset.liked_by_me = !liked_by_me

		asset.likes_count += liked_by_me ? -1 : 1
	}

	return (
		<div>
			{!hideHeader && (
				<div>
					<div>
						{/* <Link href={Routes.settings}>
						<button
							onClick={() => {
								navigation.navigate(Routes.settings, {
									hash: `${asset?.modele?.hash}`,
								})
							}}
						>
							<Thumbnail small source={{ uri: asset?.modele?.poster }} />
						</button>
						</Link> */}

						<div>
							<Link href={Routes.settings}>
								{/* <span
								onClick={() => {
									navigation.navigate(screenNames.PublicModelProfileScreen, {
										hash: `${asset?.modele?.hash}`,
									})
								}}
							> */}
								<span>{asset?.is_for_me ? "Me" : asset?.modele?.stage_name}</span>
								{/* </span> */}
							</Link>
						</div>
					</div>
				</div>
			)}
			<DoubleTap onDoubleTap={handleToggleLike}>
				<div>
					{asset?.type === "photo" ? (
						<Image
							src={asset?.uri}
						/>
					) : (
						<video
							ref={video}
							style={{
								flex: 1,
							}}
							src={asset?.uri}
						/>
					)}
				</div>
			</DoubleTap>
			<div>
				<div>
					<button onClick={handleToggleLike}>
						{/* <FontAwesome
							name={asset?.liked_by_me ? "heart" : "heart-o"}
							style={{
								color: colors.pink,
								fontSize: 36,
							}}
						/> */}

						{/* <span
							style={{
								color: colors.darkGrey,
							}}
						>
							{asset?.likes_count} like
							{asset?.likes_count !== 1 ? "s" : ""}
						</span> */}
					</button>
				</div>
				<div>
					<span>{dayjs(asset?.created_at).fromNow()}</span>
				</div>
			</div>

			<div>
				<span>{asset?.caption}</span>
			</div>
		</div>
	)
}

export default MediaCard