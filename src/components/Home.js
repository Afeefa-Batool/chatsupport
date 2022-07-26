import React from 'react';
const Home = () => {
    return (
        <div className="container col-md-8 text-center mt-2">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src="https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg?w=900&t=st=1658519093~exp=1658519693~hmac=ba04d4703f26a891f1d659d20cbc851f011e9dac550f2c9c40c56032e3b4b2d1" className="img d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-psd/front-view-creative-graphic-designer-desk_23-2148278443.jpg?w=740&t=st=1658518923~exp=1658519523~hmac=3990e56be34592070f774430fdc8b3ddbdfd6b04ba33782aaf67de5f2567625d" className="img d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img  src="https://img.freepik.com/free-vector/flat-hand-drawn-people-shopping-sale-illustration_23-2148829747.jpg?w=740&t=st=1658519013~exp=1658519613~hmac=fafa8b044392f211d07c337a775e3c616cb2fa51989c9a91dd80bc64354fa659" className="img d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    );
};

export default Home;