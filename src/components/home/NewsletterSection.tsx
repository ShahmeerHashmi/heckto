import Image from 'next/image'

const NewsletterSection = () => {
  return (
    <div className="w-full">
      <Image 
        src="/newsletter.jpg"
        alt="Newsletter"
        width={1920}
        height={400}
        className="w-full object-cover"
      />
    </div>
  )
}

export default NewsletterSection
