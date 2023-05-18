import './Content.css';
import { useState } from 'react';
import {
  RiPlayFill,
  RiPauseFill,
  RiArrowDropLeftFill,
  RiArrowDropRightFill,
} from 'react-icons/ri';

export const Content = () => {
  const data = [
    {
      title: 'The beauty of the mountains.',
      image: '/assets/1.jpg',
    },
    {
      title: 'Life in the city',
      image: '/assets/2.jpg',
    },
    {
      title: 'In the depths of the ocean',
      image: '/assets/3.jpg',
    },
    {
      title: "World's highest peaks",
      image: '/assets/4.jpg',
    },
    {
      title: 'The new outlook.',
      image: '/assets/5.jpg',
    },
  ];

  const [main, setMain] = useState({
    title: 'In the depths of the ocean',
    image: '/assets/3.jpg',
  });

  const [play, setPlay] = useState(false);

  console.log(main);

  return (
    <div id="content-container">
      <div id="content-left">
        <img src={main.image} alt="" id="content-main-img" />
        <div id="content-left-img-container">
          <span className="arrow">
            <RiArrowDropLeftFill />
          </span>
          {data.map((e) => (
            <img
              src={e.image}
              alt=""
              className="content-images"
              onClick={() => setMain(e)}
              key={e.title}
            />
          ))}
          <span className="arrow">
            <RiArrowDropRightFill />
          </span>
        </div>
      </div>
      <div id="content-right">
        <span id="content-right-heading">{main.title}</span>
        <span id="content-right-body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          alias maiores corrupti libero pariatur sit consequatur dicta labore
          dolorum voluptatem magnam animi ullam illum, quas facilis voluptas
          commodi ipsa illo sint rerum adipisci non. Quia et amet consequuntur
          autem repellat odit, rem voluptate architecto ut illo, maxime non
          alias velit quidem tempora incidunt laudantium provident, beatae ad ex
          veritatis possimus sit explicabo hic. Debitis consequuntur odit nihil
          maiores, odio deleniti molestias minima quo, quos, explicabo harum
          repellendus aperiam natus alias laudantium voluptate voluptatem ut
          nemo nobis vero officiis et. Iusto eligendi et eius? Esse vero, odit,
          inventore beatae amet eveniet ratione, facere accusamus corporis neque
          fuga nesciunt atque ducimus iure enim! Consequatur sequi laboriosam
          error eos vel veritatis iusto nam ducimus vero cum dignissimos iure
          dolorem hic illum tenetur possimus, quam voluptatem neque cupiditate.
          Dolorum excepturi blanditiis eligendi ea quaerat inventore quos?
          Nesciunt quae suscipit iste dignissimos laudantium culpa facilis
          maxime illum rem, error modi veniam vel, delectus dolores. Deleniti
          aperiam quas voluptatem asperiores, omnis magnam alias illum corporis
          sapiente tempore voluptas praesentium iure perspiciatis dolores sed.
          Accusamus, animi? Necessitatibus fugit eum, nihil quasi expedita
          voluptatem sunt. Accusamus, necessitatibus voluptatem. Minus, sunt
          quibusdam officia earum ea eligendi esse tempore eveniet.
        </span>
        <span id="play-button" onClick={() => setPlay(!play)}>
          {play ? <RiPlayFill /> : <RiPauseFill />}
        </span>
      </div>
    </div>
  );
};
