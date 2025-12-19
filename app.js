let response;
let data;

function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hide");
  }
}

/* When page loads normally */
window.addEventListener("load", hideLoader);

/* When page is restored from back/forward navigation */
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    hideLoader();
  }
});

window.addEventListener("pageshow", function () {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.add("hide");
});



function loadpage(page) {

  const container = document.getElementById("main-container");
  if (!container) {
    console.error("main-container not found in DOM");
    return;
  }

  console.log("loading page", page)

  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error("Page not found" + response.status);
      }
      return response.text()
    })
    .then(data => {
      container.innerHTML = data;
    })
    .catch(error => {
      container.innerHTML =
        "<h2>Error</h2><p>Content could not be loaded.</p>";
      console.log("error", error)
    });
}



$(document).ready(function () {
  `~`
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {           
        items: 1,
        margin: 10,
        stagePadding: 20
      },
      576: {          
        items: 1,
        margin: 15
      },
      768: {         
        items: 2
      },
      992: {         
        items: 3
      }
    }
  });
});

const handleClick = () => {
  swal({
    title: "Thankyou For Contacting Us!!!!",
    text: "We Will Get Back To You Soon.",
    icon: "success",
    button: true,
    timer: 3000,
  });
}