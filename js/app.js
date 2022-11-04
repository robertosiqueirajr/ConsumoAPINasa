function fnAction(defineDate) {

    defineDate =  document.getElementById('date').value;

    const api_key = 'm4pzhqgNPPeya6TpMSf1D1hJb9gh1Ga4WNLU1YJS';
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${defineDate}&concept_tags=True`;

    fetch(URL)
    .then((readURL) => readURL.json())
    .then((readJson) => {

        // console.log(readJson.url)

        const result = document.getElementById('root')
        result.innerHTML = `

      <div class="card mb-3" style="max-width: 1200px;">
        <div class="row g-0">
          <div class="col-md-6">
            <img src="${readJson.hdurl}" class="img-fluid rounded-start" alt="${readJson.explanation}">
          </div>
          <div class="col-lg-6">
            <div class="card-body">
              <h5 class="card-title">${readJson.title}</h5>
              <p class="card-text">${readJson.explanation}</p>
              <p class="card-text"><small class="text-muted">Copyright: ${readJson.copyright} | Date Image: ${readJson.date}</small></p>
            </div>
          </div>
        </div>
      </div>
            
          `;
    })
}

fnAction();