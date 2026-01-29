import './Hero.css';
function Hero() {
  return (
    
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="https://picsum.photos/800/400?1" className="d-block w-100" alt="slide1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to Our Library</h5>
            <p>Explore a vast collection of books and knowledge.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="https://picsum.photos/800/400?2" className="d-block w-100" alt="slide2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Read Anytime, Anywhere</h5>
            <p>Access your favourite books with just one click.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            className="d-block w-100"
            alt="book"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Boost Your Knowledge</h5>
            <p>Reading is the best investment you can make in yourself.</p>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Hero;
