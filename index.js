$().ready(() => {
  // =============== Section top =============== //
  $(document).ready(function () {
    $('body').css('background-color', 'black')

    // ===============================
    // Headline
    // ===============================
    const headline = $('<h1>')
    headline.text('PAGE HEADER')
    $('body').append(headline)

    headline.css({
      color: 'white',
      'text-align': 'center',
      'font-size': '60px',
    })

    // ===============================
    // Cards
    // ===============================
    const cardsData = [
      { city: 'Vancouver', temperature: '22°C', weather: 'Cloudy' },
      { city: 'Vancouver', temperature: '22°C', weather: 'Cloudy' },
      { city: 'Vancouver', temperature: '22°C', weather: 'Cloudy' },
      { city: 'Vancouver', temperature: '22°C', weather: 'Cloudy' },
    ]

    // Add card container
    const cardContainer = $('<div>').addClass('card-container')
    $('body').append(cardContainer)
    cardContainer.css({
      display: 'flex',
      gap: '2rem',
      'justify-content': 'space-between',
    })

    $.each(cardsData, (index, data) => {
      const card = $('<div>').addClass('card')
      const city = $('<p>').text(data.city)
      const temperature = $('<p>').text(data.temperature)
      const weather = $('<p>').text(data.weather)

      card.css({
        flex: 1,
        'background-color': 'white',
        color: 'black',
        'font-size': '30px',
        'border-radius': '10px',
        'text-align': 'center',
      })

      card.append(city, temperature, weather)
      $('.card-container').append(card)
    })
  })
})

// =============== Section bottom =============== //
// Daniel
