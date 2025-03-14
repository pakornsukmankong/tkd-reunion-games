import Ads from "../ads"

const Home = () => {
  const isAds = false

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '160px',
          color: 'white',
          fontWeight: 800,
        }}
      >
        <div>Games</div>
        <div>Battle</div>
      </div>
      {isAds ? <Ads/> : null}
    </>
  )
}

export default Home
