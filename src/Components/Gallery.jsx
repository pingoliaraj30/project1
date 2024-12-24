import React from 'react'

function Gallery() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2024/05/27/21/26/desk-8792354_640.png" class="d-block w-100" alt="..." style={{ height: '100vh' }} />
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2024/02/05/14/40/man-8554677_640.png" class="d-block w-100" alt="..." style={{ height: '100vh' }} />
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2020/05/31/09/45/city-5242045_640.jpg" class="d-block w-100" alt="..." style={{ height: '100vh' }} />
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2019/05/16/20/15/online-4208112_640.jpg" class="d-block w-100" alt="..." style={{ height: '100vh' }} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Gallery