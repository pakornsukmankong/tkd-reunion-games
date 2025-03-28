import { AppContainer } from '@/component/container'
import Home from '@/component/home'

const HomePage = () => {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  )
}

// If you're using SSG, keep only getStaticProps and remove getServerSideProps
export async function getStaticProps() {
  // Your static data fetching logic here
  return {
    props: {
      // Your data here
    },
  };
}

export default HomePage
