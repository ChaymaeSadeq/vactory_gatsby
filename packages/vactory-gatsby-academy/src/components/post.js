import React from 'react'
import { ParagraphsController } from 'vactory-gatsby-ui'
import { useTranslation } from 'react-i18next'
import { imageLayoutStyles } from "vactory-gatsby-academy";
import {
	Picture,
	Wysiwyg,
	SingleActionModal as Modal,
	Icon,
} from "vactory-gatsby-ui";
import get from 'lodash.get'
import { SocialShare } from 'vactory-gatsby-ui'
import Rating from 'react-rating'
import FsLightbox from 'fslightbox-react'

const VideoThambnail = ({alt, image, onClick}) => {
  return (
		<div className="relative mx-auto w-full h-full rounded-lg shadow-lg max-w-sm lg:max-w-lg">
			<button
				onClick={onClick && onClick}
				type="button"
				className="aspect-h-3 aspect-w-4 relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none"
			>
				<span className="sr-only">Watch the video to learn more</span>
				<Picture
					sizes={imageLayoutStyles.thumbnail.sizes}
					className="w-full object-cover"
					file={image}
					alt={alt}
				/>
				<div
					className="absolute inset-0 w-full h-full flex items-center justify-center"
					aria-hidden="true"
				>
					<svg
						className="h-20 w-20 text-indigo-500"
						fill="currentColor"
						viewBox="0 0 84 84"
					>
						<circle
							opacity="0.9"
							cx={42}
							cy={42}
							r={42}
							fill="white"
						/>
						<path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
					</svg>
				</div>
			</button>
		</div>
  );
}


const Post = (props) => {
  const { t } = useTranslation()
  const title = props.title
  const language = props.language
  const excerpt = props.excerpt
  const changed = props.changed
  const instructor = props.instructor
  const duration = props.duration
  const video = props.video
  const category = props.category
  const paragraphs = props.paragraphs
  const image = get(props, 'image', null)
  const vote_average = get(props, 'vote_average', 0)
  const vote_count = get(props, 'vote_count', 0)
  const hasVoted = get(props, 'hasVoted', false)
  const vote = get(props, 'vote', 0)
  const [showShareModal, setShowShareModal] = React.useState(false)
  const [showRateModal, setShowRateModal] = React.useState(false)
  const [toggler, setToggler] = React.useState(false)

  return (
		<>
			<div>
				<div className="bg-blue-900 text-white">
					<div className="container px-3">
						<div className="flex py-10 flex-wrap md:flex-nowrap">
							<div className="w-full md:w-3/4 space-y-3 px-3">
								<h2 className="text-3xl font-semibold mb-8 uppercase">
									{title}
								</h2>
								<div>
									<Wysiwyg html={excerpt} />
								</div>
								<div className="flex flex-wrap space-x-3 rtl:space-x-reverse items-center">
									<p className="text-sm font-medium">
										<a
											href="#!"
											className="inline-flex items-center px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800"
										>
											{category}
										</a>
									</p>
									<Rating
										initialRating={vote_average}
										readonly
										emptySymbol={
											<Icon
												name="star-full"
												color="gray500"
												size="medium"
											/>
										}
										fullSymbol={
											<Icon
												name="star-full"
												color="warning500"
												size="medium"
											/>
										}
									/>
									<span>
										({vote_count} {t("notes")})
									</span>
								</div>
								<div className="flex flex-wrap space-x-4 rtl:space-x-reverse">
									<div>
										<svg
											title="Créé par"
											className="h-4 w-4 ltr:mr-2 rtl:ml-2 inline"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												fill="#fff"
												d="M12 14l9-5-9-5-9 5 9 5z"
											/>
											<path
												fill="#fff"
												d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
											/>
										</svg>
										Créé par: {instructor.name}
									</div>
									<div>Dernière mise à jour : {changed}</div>
								</div>
								<div className="flex flex-wrap space-x-4 rtl:space-x-reverse">
									<div>
										<Icon
											mr="xxsmall"
											name="comment_signe"
											size="medium"
										/>
										{language}
									</div>
									<div>Durée : {duration}</div>
								</div>
							</div>
							<div className="w-full md:w-1/4 order-first md:order-none py-4">
								<VideoThambnail
									onClick={() => setToggler(!toggler)}
									alt={title}
									image={image}
								/>
								<FsLightbox
									toggler={toggler}
									sources={[video]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container px-3">
				<section className="flex flex-wrap">
					<div className="w-4/5">
						{paragraphs &&
							paragraphs.map((paragraph) => (
								<ParagraphsController
									key={paragraph.id}
									data={paragraph}
									hasAMP={false}
								/>
							))}
					</div>

					<aside className="w-1/5 flex flex-col items-center space-y-5 py-10">
						<button
							className="inline-flex items-center border border-blue-300 shadow-sm px-3 py-2 text-sm leading-4 font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={() => setShowRateModal(true)}
						>
							{hasVoted
								? t("Supprimer la note")
								: t("Evaluer ce cours")}
						</button>
						<Modal
							isOpen={showRateModal}
							body={
								<div className="my-8 mx-16 flex flex-col justify-center">
									<h4 className="text-lg font-medium">
										{hasVoted
											? t("Supprimer la note")
											: t("Evaluer ce cours")}
									</h4>

									<Rating
										initialRating={hasVoted ? vote : false}
										readonly={hasVoted}
										fractions={2}
										onChange={(rate) => {
											props.handleVote(rate);
											setShowRateModal(false);
										}}
										emptySymbol={
											<Icon
												name="star-full"
												color="gray300"
												size="xlarge"
											/>
										}
										fullSymbol={
											<Icon
												name="star-full"
												color="warning500"
												size="xlarge"
											/>
										}
									/>
								</div>
							}
							actionHandler={() => {
								if (hasVoted) props.handleUnvote();
								setShowRateModal(false);
							}}
							actionLabel={
								hasVoted ? t("Supprimer la note") : t("Annuler")
							}
						/>

						<button
							className="inline-flex items-center border border-blue-300 shadow-sm px-3 py-2 text-sm leading-4 font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={() => setShowShareModal(true)}
						>
							{t("Partager ce cours")}
						</button>

						<Modal
							body={<SocialShare />}
							isOpen={showShareModal}
							actionLabel={t("Annuler")}
							actionHandler={() => setShowShareModal(false)}
						/>
					</aside>
				</section>

				<section className="">
					<h4 className="text-2xl font-bold">{t("Formateur")}</h4>
					<div className="sm:flex">
						<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
							<Picture
								disableAspectRatio
								file={instructor.picture}
								alt={instructor.name}
								sizes={imageLayoutStyles.avatar.sizes}
								className="h-32 w-32 border border-gray-300 bg-white text-gray-300"
							/>
						</div>
						<div>
							<h4 className="text-lg font-bold">
								{instructor.first_name} {instructor.last_name}
							</h4>
							<div className="mt-1">{instructor.about}</div>
						</div>
					</div>
					<ul>
						<li>
							<Icon mr="xxsmall" name="star-full" size="medium" />
							<span>4.8 Note du formateur</span>
						</li>
						<li>
							<Icon
								mr="xxsmall"
								name="comment_signe"
								size="medium"
							/>
							<span>10 avis</span>
						</li>
						<li>
							<Icon
								mr="xxsmall"
								name="play-picto"
								size="medium"
							/>
							<span>10 cours</span>
						</li>
					</ul>
				</section>
			</div>
		</>
  );
}
export default Post
