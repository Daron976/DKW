import React, { useEffect, useState } from 'react';

const Home = () => {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (animation) {
        setAnimation(false);
      }
    }, 2000);
  }, []);

  return (
    <section className="home-content flex" data-testid="home">
      <div className="home-header">
        <h1
          className={
            animation
              ? 'name-animation'
              : ''
          }
        >
          Daron Wiafe
        </h1>
        <p
          className={
            animation
              ? 'subtext-animation subtext'
              : 'subtext'
          }
        >
          Software developer
        </p>
      </div>
    </section>
  );
};

export default Home;
