import React from 'react';
import avatar from './avatar.png'

const reviewsData = [
  {
    id: 1,
    name: 'Иван Иванов:',
    review:
      'CoffeDon - моё любимое место для встреч с друзьями. Вкусный кофе, дружелюбная атмосфера и отличное место для работы. Так же это замечательное место для утренней чашки кофе в уютной обстановке и отличным выбором напитков. Рекомендую всем!',
    image: avatar,
  },
  {
    id: 2,
    name: 'Михаил Сидоров',
    review:
      'Кофейня предлагает разнообразный ассортимент кофе которое позволяет вам насладиться каждым визитом. Атмосфера здесь просто невероятная - уютная, расслабляющая, как будто попадаешь в другой мир. Кофе - просто божественный, идеально сваренный, с богатым вкусом и ароматом. Рекомендую всем!',
    image: avatar,
  },
  {
    id: 3,
    name: 'Сергей Кузнецов',
    review:
      'Я люблю читать, и кофейня “CoffeDon” - это идеальное место для этого. Здесь тихо, уютно, и есть много мест для комфортного чтения. Кроме того, здесь вкусный кофе. Персонал всегда приветливый и ненавязчивый. Рекомендую всем любителям чтения!',
    image: avatar,
  },
  {
    id: 4,
    name: 'Антон Булкин',
    review:
      'Я только что посетил эту удивительную кофейню и остался в полном восторге! Атмосфера здесь просто невероятная - уютное место, идеальное для того, чтобы насладиться чашечкой вкуснейшего кофе. Обслуживание на высшем уровне, персонал вежливый и внимательный. Мне порадовало разнообразие напитков на выбор, каждый найдет что-то по своему вкусу. Обязательно вернусь сюда снова!',
    image: avatar,
  },
  {
    id: 5,
    name: 'Мария Васильева',
    review:
      'Мне очень понравилось, что в кофейне предлагают разнообразные сорта кофе. Кофейня “CoffeDon” расположена в прекрасном месте. Здесь можно насладиться не только вкусным кофе, но и прекрасной атмосферой. Особенно рекомендую посетить кофейню в вечернее время, когда город погружается в темноту. Регулярно прихожу сюда на встречи с друзьями!',
    image: avatar,
  },
  
];


const Reviews = () => {
  return (
    <div className="reviews-container">
      <h2>Отзывы</h2>
      <div className="reviews-grid2">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} className="round-image" />
            <h3>{review.name}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;