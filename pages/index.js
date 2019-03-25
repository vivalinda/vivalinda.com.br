import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Page from '../components/Page'


const Index = ({ photos }) => {
    return (
    <Page>
      <div className="row no-gutters photoContainer">
        {photos.map((photo, i) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i} >
            <a href={photo.link}>
              <img className="photoCard"   alt="foto-instagram" src={photo.images.standard_resolution.url} />
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .photoContainer{
          padding: 67px 1.5% 1.5% 1.5%;
        }
        .photoCard {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 3%;
          border-radius: 7%;
        }
      `}</style>
      </Page>
  )
}

Index.getInitialProps = async () => {
  const baseURL = 'https://api.instagram.com/v1/users/self/media/recent/'
  const INSTA_TOKEN = '2025866324.1677ed0.3b9fcabd94e04d678fe4a8fbc95d79c6'
  const numOfPics = 12  

  const res = await axios.get(`${baseURL}?access_token=${INSTA_TOKEN}&count=${numOfPics}&callback=?`);

  return { photos: res.data.data }
}

export default Index
