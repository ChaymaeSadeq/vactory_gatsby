export default {
  twitter: (link, message) =>
    `https://twitter.com/intent/tweet/?text=${encodeURIComponent(
      message || '',
    )}&url=${encodeURIComponent(link || '')}`,
  facebook: (link) =>
    `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      link || '',
    )}`,
  mail: (link, message) =>
    `mailto:?subject=${encodeURIComponent(
      message || '',
    )}&body=${encodeURIComponent(link || '')}`,
  linkedin: (link, message) =>
    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      link || '',
    )}&title=${encodeURIComponent(message || '')}&summary=${encodeURIComponent(
      message || '',
    )}&source=${encodeURIComponent(link || '')}`,
}
