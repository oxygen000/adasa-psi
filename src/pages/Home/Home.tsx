import Hero from '../../Components/Hero/Hero'
import FeaturedArticles from '../../Components/FeaturedArticles/FeaturedArticles'
import Categories from '../../Components/Categories/Categories'
import LatestArticles from '../../Components/LatestArticles/LatestArticles'
import Newsletter from '../../Components/Newsletter/Newsletter'

function Home() {
  return (
    <div >
      <Hero/>
      <FeaturedArticles/>
      <Categories/>
      <LatestArticles/>
      <Newsletter/>

    </div>
  )
}

export default Home