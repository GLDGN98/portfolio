'use strict'



$(document).ready(function () {
  var gProjs;
  renderProjs()
  renderModal()
  onShowPortfolioItem()

});

function renderProjs() {
  var strHtmls = gProjs.map(project => `<div class="col-md-4 col-sm-6 portfolio-item" data-item-id="${project.id}">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
      </a>
      <div class="portfolio-caption">
        <h4>${project.name}</h4>
        <p class="text-muted">${project.title}</p>
      </div>`)
  $('#portfolio-row-items').html(strHtmls)
}

function renderModal() {
  var strHtmls = `
    <div class="portfolio-modal-container">
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <h2>Project Name</h2>
                  <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est
                    blanditiis
                    dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita
                    beatae
                    cupiditate,
                    maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul class="list-inline">
                    <li class="date"></li>
                    <li class="github-link"></li>
                    <li class="labels"></li>
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  $('.portfolio-modal-container').html(strHtmls)
}
function onShowPortfolioItem() {
  $('.portfolio-item').on('click', function () {
    var projectId = $(this).data('itemId')
    var project = getPortfolioItemById(projectId)
    console.log(project)
    $('.modal-body').children('h2').text(project.id)
    $('.modal-body').children('img').attr("src", `img/portfolio/${project.id}.png`)
    $('.modal-body').children('p').text(project.desc)
    $('.list-inline').children('.date').text(new Date(project.publishedAt).toLocaleDateString())
    $('.list-inline').children('.labels').text(project.labels)
  })
}

$('#myForm').submit(function (e) {
  e.preventDefault()
  var email = $("#inputEmail").val();
  var subject = $("#inputSubject").val()
  var messsage = $("#inputMessage").val()
  console.log(email, subject, messsage)

});
