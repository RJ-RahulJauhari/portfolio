import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div>
      <section class="articles">
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="/note.png" alt="" />
            </figure>
            <div class="article-body">
              <h2>Note it Down</h2>
              <p>
                I've developed a versatile note-taking app that offers users the
                convenience of capturing, prioritizing, and color-coding their
                notes for easy organization. This app also enables users to save
                their notes securely in the cloud. Additionally, I've
                implemented a filtering feature that utilizes database queries
                to facilitate note retrieval based on various criteria. To
                ensure data persistence and user convenience, the app
                incorporates Firebase authentication, allowing users to create
                accounts and safeguard their data, even if they uninstall the
                app. The app utilizes Java and Android Studio and employs Room
                Database and Firebase Realtime Database for data storage. In the
                future, I plan to enhance the app by integrating OCR
                capabilities, enabling users to extract text from photos in
                their camera or gallery, and seamlessly share their notes
                directly from the app.
              </p>
              <a href="#" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="/web.jpeg" alt="" />
            </figure>
            <div class="article-body">
              <h2>Modern Website Clone</h2>
              <p>
                I'm thrilled to share that I've embarked on a journey to enhance
                my UI and UX skills! 🎨💻 With the guidance of the brilliant
                Anuj Kumar Sharma sir, I've been working diligently on creating
                an incredible website clone using only HTML and CSS. 🌐✨ Anuj
                Bhaiya's Web Development playlist has been a valuable resource
                on my learning path, providing me with a wealth of knowledge on
                best practices that eliminate repetitive code and enhance
                website responsiveness. 📚👨‍💻 But that's not all! Alongside Anuj,
                I've gained invaluable insights into SEO and modern UI design
                techniques. Plus, I've picked up some of his nifty tricks for
                crafting stunning websites! 🤯💡 I can't wait to continue this
                learning journey and share my progress with all of you. Stay
                tuned for more updates!
              </p>
              <a href="#" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ProjectCard;
