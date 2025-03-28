// to open and close search
const searchIcon = document.querySelector(".searchIcon");
const searchInput = document.querySelector(".searchInput");
function OpenSearch() {
  searchInput.classList.toggle("active");
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// half circle

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.SemiCircle(containercircle, {
  strokeWidth: 6,
  color: "#FFEA82",
  trailColor: "#eee",
  trailWidth: 1,
  easing: "easeInOut",
  duration: 1400,
  svgStyle: null,
  text: {
    value: "",
    alignToBottom: false,
  },
  from: { color: "#FFEA82" },
  to: { color: "#ED6A5A" },
  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText("");
    } else {
      bar.setText(value);
    }

    bar.text.style.color = state.color;
  },
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "2rem";

bar.animate(1.0); // Number from 0.0 to 1.0
