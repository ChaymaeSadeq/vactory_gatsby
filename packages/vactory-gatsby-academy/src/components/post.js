import React from 'react'
import { ParagraphsController } from 'vactory-gatsby-ui'
import { useTranslation } from 'react-i18next'
import { imageLayoutStyles } from 'vactory-gatsby-academy'
import { Picture } from 'vactory-gatsby-ui'
import {
  Layer,
  Button,
  Icon,
  Box,
  Flex,
  Row,
  Col,
  Text,
  Container,
} from 'vactory-ui'
import get from 'lodash.get'
import { SocialShare } from 'vactory-gatsby-ui'
import Rating from 'react-rating'
import FsLightbox from 'fslightbox-react'

const Card = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        bg: 'black600',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'montserrat',
        marginBottom: '16px',
        width: '100%',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const CardTitle = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
        fontSize: ['22px', null, '24px', null],
        ineHeight: '30px',
        fontWeight: 800,
        letterSpacing: '0',
        marginBottom: '16px',
        textTransform: 'uppercase',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const CardExcerpt = ({ children, ...rest }) => {
  return (
    <Text mb="medium" fontSize="16px" {...rest}>
      {children}
    </Text>
  )
}

const CardInfo = ({ children, ...rest }) => {
  return (
    <Text mb="medium" mr="medium" fontSize="14px" {...rest}>
      {children}
    </Text>
  )
}

const CardTag = ({ children }) => (
  <Box
    __css={{
      display: 'inline-flex',
      fontSize: '9px',
      fontWeight: '600',
      backgroundColor: 'info500',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'xsmall',
      textTransform: 'uppercase',
      maxWidth: '100px',
      py: 'xxsmall',
      px: 'xsmall',
      mr: 'small',
      mb: 'small',
      color: 'white',
    }}
  >
    {children}
  </Box>
)

const Title = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h6"
      sx={sx}
      __css={{
        fontSize: ['15px', null, '17px', null],
        ineHeight: '28px',
        fontWeight: 600,
        letterSpacing: '0',
        color: '#707070',
        textTransform: 'uppercase',
        mb: 'small',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const RateCourse = ({ setShowModal, handleVote, hasVoted, vote }) => {
  const { t } = useTranslation()
  return (
    <Flex
      mx="xxxlarge"
      my="large"
      justifyContent="center"
      flexDirection="column"
    >
      <Title>{hasVoted ? t('Supprimer la note') : t('Evaluer ce cours')}</Title>
      <Rating
        initialRating={hasVoted ? vote : false}
        readonly={hasVoted}
        fractions={2}
        onChange={(rate) => {
          handleVote(rate)
          setShowModal(false)
        }}
        emptySymbol={<Icon name="star-full" color="gray300" size="xlarge" />}
        fullSymbol={<Icon name="star-full" color="warning500" size="xlarge" />}
      />
    </Flex>
  )
}

const ParagraphTitle = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
        color: 'black600',
        fontSize: ['20px', null, '22px', null],
        ineHeight: '30px',
        fontWeight: 800,
        letterSpacing: '0',
        marginBottom: '16px',
        px: 'medium',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const Modal = ({
  children,
  setShowModal,
  isRating,
  hasVoted,
  handleUnvote,
}) => {
  const { t } = useTranslation()
  return (
    <Layer position="bottom" onClickOutside={() => setShowModal(false)}>
      <Flex
        p="medium"
        boxShadow={4}
        flexDirection="column"
        bg="white"
        borderRadius="small"
      >
        {children}
        <Flex mt="medium" mx="large" justifyContent="flex-end">
          <Button
            mx="small"
            outline="danger"
            onClick={() => {
              if (isRating && hasVoted) handleUnvote()
              setShowModal(false)
            }}
          >
            {isRating
              ? hasVoted
                ? t('Supprimer')
                : t('Annuler')
              : t('Annuler')}
          </Button>
        </Flex>
      </Flex>
    </Layer>
  )
}

const PlayButton = ({ sx, children, ...rest }) => {
  return (
    <Box
      __css={{
        position: 'relative',
        width: '100%',
        maxWidth: '300px',
        margin: 'auto',
      }}
    >
      {children}
      <Icon
        __css={{
          position: 'absolute',
          float: 'left',
          left: '50%',
          top: '50%',
          zIndex: 2,
          color: 'gray300',
          cursor: 'pointer',
          transform: 'translate(-50%, -50%)',
          '-ms-transform': 'translate(-50%, -50%)',
          '&:hover': {
            color: 'info500',
          },
        }}
        size="xxlarge"
        name="videos"
        {...rest}
      />
    </Box>
  )
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
      <Card>
        <Container>
          {/* <Box
          sx={{
            p: 'medium',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <span>add to favorite</span>
        </Box> */}
          <Row>
            <Col xs={12}>
              <Flex
                flexDirection={[
                  'column-reverse',
                  'column-reverse',
                  'column-reverse',
                  'row',
                ]}
              >
                <Col xs={12} lg={8}>
                  <Flex flexDirection="column">
                    <Box sx={{ p: 'medium', flexGrow: 1 }}>
                      <CardTitle>{title}</CardTitle>
                      <CardExcerpt
                        dangerouslySetInnerHTML={{
                          __html: excerpt,
                        }}
                      />
                      <Flex
                        mb="small"
                        flexDirection={['column', 'column', 'row']}
                      >
                        <CardTag>{category}</CardTag>
                        <Flex py="1px" maxHeight="20px">
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
                          <CardInfo pl="small">
                            ({vote_count} {t('notes')})
                          </CardInfo>
                        </Flex>
                      </Flex>
                      <Flex flexDirection={['column', 'column', 'row']}>
                        <CardInfo>Créé par {instructor.name}</CardInfo>
                        <CardInfo>Dernière mise à jour : {changed}</CardInfo>
                      </Flex>
                      <Flex flexDirection={['column', 'column', 'row']}>
                        <Flex>
                          <Icon
                            mr="xxsmall"
                            name="comment_signe"
                            size="medium"
                          />
                          <CardInfo>{language}</CardInfo>
                        </Flex>
                        <CardInfo>Durée : {duration}</CardInfo>
                      </Flex>
                    </Box>
                  </Flex>
                </Col>
                <Col xs={12} lg={4}>
                  <Box py="medium">
                    <PlayButton onClick={() => setToggler(!toggler)}>
                      <Picture
                        file={image}
                        sizes={imageLayoutStyles.Thumbnail.sizes}
                        alt={instructor.name}
                        width={imageLayoutStyles.Thumbnail.width}
                        height={imageLayoutStyles.Thumbnail.height}
                        ratio={imageLayoutStyles.Thumbnail.ratio}
                      />
                    </PlayButton>
                    <FsLightbox toggler={toggler} sources={[video]} />
                  </Box>
                </Col>
              </Flex>
            </Col>
          </Row>
        </Container>
      </Card>
      <Container>
        <Flex mb="xxxlarge" flexDirection={['column-reverse', 'column', 'row']}>
          <Col xs={12} md={8}>
            <div>
              {paragraphs &&
                paragraphs.map((paragraph) => {
                  return (
                    <ParagraphsController
                      key={paragraph.id}
                      data={paragraph}
                      hasAMP={false}
                    />
                  )
                })}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Flex mb="large" flexDirection="column">
              <Flex m="auto" p="small" justifyContent="center">
                <Button
                  width="180px"
                  outline="info"
                  onClick={() => setShowShareModal(true)}
                >
                  {t('Partager ce cours')}
                </Button>
                {showShareModal && (
                  <Modal setShowModal={setShowShareModal}>
                    <SocialShare />
                  </Modal>
                )}
              </Flex>
              <Flex m="auto" p="small" justifyContent="center">
                <Button
                  width="180px"
                  textAlign="center"
                  outline="info"
                  onClick={() => setShowRateModal(true)}
                >
                  {hasVoted ? t('Supprimer la note') : t('Evaluer ce cours')}
                </Button>
                {showRateModal && (
                  <Modal
                    handleUnvote={props.handleUnvote}
                    hasVoted={hasVoted}
                    isRating={true}
                    setShowModal={setShowRateModal}
                  >
                    <RateCourse
                      setShowModal={setShowRateModal}
                      handleVote={props.handleVote}
                      hasVoted={hasVoted}
                      vote={vote}
                    />
                  </Modal>
                )}
              </Flex>
            </Flex>
          </Col>
        </Flex>
        <ParagraphTitle px="large">{t('Formateur')}</ParagraphTitle>
        <Flex p="medium" flexDirection={['column', 'column', 'row']}>
          <Col xs={12} md={4}>
            <Flex flexDirection={['row', 'column', 'column']}>
              <Col xs={6} md={12}>
                <Picture
                  file={instructor.picture}
                  sizes={imageLayoutStyles.Avatar.sizes}
                  alt={instructor.name}
                  width={imageLayoutStyles.Avatar.width}
                  height={imageLayoutStyles.Avatar.height}
                  ratio={imageLayoutStyles.Avatar.ratio}
                  style={{
                    mb: '16px',
                    borderRadius: '50%',
                  }}
                />
              </Col>
              <Flex ml={['medium', 'none', 'none']} flexDirection="column">
                <Flex py="xxsmall">
                  <Icon mr="xxsmall" name="star-full" size="medium" />
                  <CardInfo>4.8 Note du formateur</CardInfo>
                </Flex>
                <Flex py="xxsmall">
                  <Icon mr="xxsmall" name="comment_signe" size="medium" />
                  <CardInfo>10 avis</CardInfo>
                </Flex>
                <Flex py="xxsmall">
                  <Icon mr="xxsmall" name="play-picto" size="medium" />
                  <CardInfo>10 cours</CardInfo>
                </Flex>
              </Flex>
            </Flex>
          </Col>
          <Col xs={12} md={8}>
            <Flex flexDirection="column">
              <CardTitle mb="large" color="info500" p="none">
                {instructor.first_name} {instructor.last_name}
              </CardTitle>
              <CardExcerpt color="#29303b">{instructor.about}</CardExcerpt>
            </Flex>
          </Col>
        </Flex>
      </Container>
    </>
  )
}
export default Post
