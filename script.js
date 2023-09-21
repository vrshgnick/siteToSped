document.addEventListener('DOMContentLoaded', function() {
  // Раскрывание/скрытие истории города
  var historySection = document.getElementById('history');
  var historyText = historySection.querySelector('p');

  document.querySelector('#about h2').addEventListener('click', function() {
    historyText.classList.toggle('hidden');
  });

  // Вставка видео
  var videoContainer = document.getElementById('videoContainer');
  videoContainer.innerHTML = '<iframe src="https://www.youtube.com/embed/CaH4srAQoT8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
});
