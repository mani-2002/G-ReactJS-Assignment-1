function Header() {
  return <header>Some of My Favourite Music List</header>;
}

function MainBody() {
  return (
    <div className="middle">
      <ul>
        <li>
          <div class="li_element">
            <img src="./images/one_night_in_dubai.jpeg" />
            <div className="music_name">
            <a href="https://www.youtube.com/watch?v=2SBsNJvN1ws&pp=ygUXb25lIG5pZ2h0IGluIGR1YmFpIHNvbmc%3D" target="_blank">One Night in Dubai</a>
            </div>
          </div>
        </li>
        <li>
          <div class="li_element">
            <img src="./images/safari.jpeg" />
            <div className="music_name">
            <a href="https://www.youtube.com/watch?v=z8OdasLT_BM&pp=ygULc2FmYXJpIHNvbmc%3D" target="_blank">Safari</a>
            </div>
          </div>
        </li>
        <li>
          <div class="li_element">
            <img src="./images/unstoppable.jpeg" />
            <div className="music_name">
            <a href="https://www.youtube.com/watch?v=YaEG2aWJnZ8&pp=ygUPdW5zdG9wcGFibGUgc2lh" target="_blank">Unstoppable</a>
            </div>
          </div>
        </li>
        <li>
          <div class="li_element">
            <img src="./images/bad_boys.jpeg" />
            <div className="music_name">
            <a href="https://www.youtube.com/watch?v=6ttobrfMnyQ&pp=ygUOaW5uYSBiYWQgYm95cyA%3D" target="_blank">INNA-Bad Boys</a>
            </div>
          </div>
        </li>
        <li>
          <div class="li_element">
            <img src="./images/let_me_love_you.jpeg" />
            <div className="music_name">
            <a href="https://www.youtube.com/watch?v=SMs0GnYze34&pp=ygUPbGV0IG1lIGxvdmUgeW91" target="_blank">Let Me Love You</a>
            </div>
          </div>
        </li>
        <li>
          <div class="li_element">
            <img src="./images/headlights.jpeg" />
            <div className="music_name">
            <a href="https://www.youtube.com/watch?v=kyLuzKbgXAs&pp=ygUPaGVhZGxpZ2h0cyBzb25n" target="_blank">Headlights</a>
            </div>
          </div>
        </li>
        <li>
          <div class="li_element">
            <img src="./images/jhoome_jo_pathaan.jpeg" />
            <div className="music_name">
            <a href="https://www.youtube.com/watch?v=YxWlaYCA8MU&pp=ygUWamhvb21lIGpvIHBhdGhhYW4gc29uZw%3D%3D" target="_blank">Jhoome JO Pathaan</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <small>©Website on my Favourite Topic Inc 2002</small>
    </footer>
  );
}
function Page() {
  return (
    <div className="container">
      <div className="inner-container">
        <Header />
        <MainBody />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
