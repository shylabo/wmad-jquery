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

  // =============== Section bottom =============== //
  const lists = [
    {
      title: "List 1",
      days: [
        { day: "Mon", temp: "20" },
        { day: "Tue", temp: "23" },
        { day: "Wed", temp: "28" },
      ],
      button: 'Red',
    },
    {
      title: "List 2",
      days: [
        { day: "Mon", temp: "17" },
        { day: "Tue", temp: "44" },
        { day: "Wed", temp: "18" },
      ],
      button: 'Yellow',
    },
    {
      title: "List 3",
      days: [
        { day: "Mon", temp: "23" },
        { day: "Tue", temp: "36" },
        { day: "Wed", temp: "24" },
      ],
      button: 'Green',
    },
  ];

  const listsBox = $('<div>')
    .attr('id', 'list-box')
    .css({
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
    });

  $('body').append(listsBox);

  $.each(lists, (index, data) => {
    const listContainer = $('<div>').attr('id', `box-${index + 1}`);
    const heading = $('<h2>').attr('id', `heading-${index + 1}`).text(`${data.title}`);
    const list = $('<ul>').attr('id', `list-${index + 1}`);
    const button = $('<button>')
      .attr('id', `button-${index + 1}`)
      .css({
        display: 'block',
        width: '100%',
        padding: '10px 15px',
        borderRadius: '8px',
        marginButton: '20px'
      })
      .text(`Make ${data.button}`);

    $.each(data.days, (index, data) => {
      const item = $('<li>').text(`${data.day} - ${data.temp} °C`);
      list.append(item);
    });
    $("#list-box").append(listContainer);
    $(`#box-${index + 1}`).append(heading, list, button);
    $(`#button-${index + 1}`).click(() => {
      $(`#box-${index + 1}`).css('color', data.button.toLowerCase());
    });
  });
});
