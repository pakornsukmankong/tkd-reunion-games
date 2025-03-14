const Home = () => {
  const isAds = false
  const renderAds = () => {
    if (isAds) {
      return (
        <>
          <div
            style={{
              border: '1px solid white',
              borderColor: 'red',
              width: '100%',
              height: '100px',
              backgroundColor: 'red',
              marginBottom: '200px',
            }}
          >
            <a
              href="https://www.sbobetonline24.com/%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2-sbobet/"
              target="_blank"
            >
              <img
                src="https://www.adorama.com/alc/wp-content/uploads/2021/05/bird-wings-flying-feature.gif"
                width="100%"
                height="200px"
              />
            </a>
          </div>
          <div
            style={{
              border: '1px solid white',
              borderColor: 'red',
              width: '100%',
              height: '100px',
              backgroundColor: 'red',
              marginBottom: '30px',
            }}
          >
            <image>โฆษณา</image>
          </div>
          <div
            style={{
              border: '1px solid white',
              borderColor: 'red',
              width: '100%',
              height: '100px',
              backgroundColor: 'red',
              marginBottom: '10px',
            }}
          >
            <image>โฆษณา</image>
          </div>
          <div
            style={{
              border: '1px solid white',
              borderColor: 'red',
              width: '100%',
              height: '100px',
              backgroundColor: 'red',
              marginBottom: '10px',
            }}
          >
            <image>โฆษณา</image>
          </div>
        </>
      )
    }
  }

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
      {renderAds()}
    </>
  )
}

export default Home
