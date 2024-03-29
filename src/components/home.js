import React, { useEffect, useState } from 'react';

const Home = () => {
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (animation) {
        setAnimation(false);
      }
    }, 2000);
  }, [animation]);

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
        <p className="header-msg">
          Developing more than just your technical products
        </p>
      </div>
    </section>
  );
};

export default Home;
