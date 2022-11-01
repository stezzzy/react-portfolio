import './App.css';

function App() {
  return (
    <body>
    <main>
      <header class="header">
        <div class="navbar">
          <div class="h1">Portfolio</div>
          <a href="#about">About Me</a>
          <a href="#projects">My Projects</a>
          <a href="#github">Github</a>
          <a href="#contact">Contact Me</a>
        </div>
      </header>

      {/* Hero section */}
      <figure class="hero">
        <div class="hero-text">
          <h1>Nicholas Stevens</h1>
          <h3>Full Stack Developer</h3>
        </div>
      </figure>
      {/* Hero end */}
      {/* About Section */}
      <section id="about">
        <h3>About Me</h3>
        <p>
          Hi my name is Nick. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptate optio ex magnam cum dolorem consectetur
          commodi perferendis quidem, quibusdam, soluta, voluptatum nihil iusto
          beatae deserunt odit. Laboriosam in pariatur quisquam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Amet, quidem iste, et
          possimus veritatis quas quos facere rerum ut velit modi quaerat beatae
          praesentium aspernatur quibusdam eveniet rem recusandae nostrum,
          consectetur vitae tempora accusantium tempore sit. Tempora, iure eius
          veritatis quibusdam vitae facere asperiores at vero temporibus
          corrupti natus quia soluta nulla dolore? Quaerat nulla voluptas vitae
          fuga expedita necessitatibus. Tempora sapiente accusamus velit
          asperiores dolor nobis quia voluptatibus odit, minima nam corporis
          ipsa eum quod laboriosam sunt commodi tempore sequi! Qui dolorum,
          ratione cupiditate dolore, accusantium atque expedita laboriosam
          quisquam ea voluptatem molestias quis molestiae dolores optio fuga
          nobis minus alias tempore saepe recusandae. Perferendis, explicabo
          nulla hic expedita commodi itaque repellat ex blanditiis nisi!
          Veritatis, voluptatibus repellendus alias perspiciatis natus debitis
          corporis. Magnam, illum doloribus vero in saepe neque fugiat
          recusandae repellat optio deleniti molestiae. Voluptas, vero esse
          veritatis optio labore molestiae nesciunt, atque accusamus minus
          expedita explicabo deserunt minima hic consequatur rem porro quibusdam
          quis numquam distinctio libero! Praesentium officia molestiae
          delectus? Atque ea mollitia temporibus eum inventore consectetur
          labore corporis sapiente corrupti pariatur omnis odio aperiam, nisi
          distinctio ut dolorem aut possimus veritatis at voluptatum aliquam.
          Obcaecati qui porro quos repellat suscipit explicabo. Animi, aperiam
          voluptatibus?
        </p>
      </section>
      <div class="profile">
        {/* <img
          class="profile"
          src="./assets/images/me2.jpg"
          alt="Profile Image"
        /> */}
      </div>
      {/* About End */} 
      {/* Start Portfolio */}
      <section id="projects" class="portfolio-section">
        <h1>My Projects</h1>

        <div class="lead-container">
          <a
            href="https://stezzzy.github.io/Refactor-SEO/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="leadProj">
              <h2>Horiseon SEO Website</h2>
            </div>
          </a>
        </div>

        {/* Row */}
        <div class="flex-container">
          {/* Column */}
          <a
            href="https://stezzzy.github.io/prework-study-guide/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Card */}
            <div id="projOne">
              <h3>Prework Study Guide</h3>
            </div>
            {/* End Card */}
          </a>
          {/* End Column */}
          <a
            href="https://github.com/stezzzy/eth-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="projTwo">
              <h3>Ethereum Python</h3>
            </div>
          </a>
          <a
            href="https://stezzzy.github.io/currency-exchange/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div id="projThree">
              <h3>Currency Exchange Rate Calculator</h3>
            </div>
          </a>
        </div>
        {/* End Row */}
      </section>
      {/* End portfolio */}
      <hr />

      <footer>
        <h4 id="contact">Contact Me:</h4>
        <ul>
          <li>Email: nick@github.com</li>
          <li>Phone: 908-9089-0890</li>
          <li id="github">
            <a href="https://github.com/stezzzy">Github: stezzzy</a>
          </li>
        </ul>
      </footer>
    </main>
  </body>
  );
}

export default App;
