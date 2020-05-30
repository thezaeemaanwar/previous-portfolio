import React from 'react'

class Header extends React.Component {
    render() {
        return (
          <section id="header">
            <div className="inner">
              <img src="assets/images/pic02.jpg" alt="" />
              <h1>
                <br />
                Hi, I'm <strong>Zaeema</strong> - A prospective Computer
                <br />
                Scientist and a hobbyist Graphic Designer.
              </h1>
              <br />
              <p>
                I like to code and while I am
                <br />
                not coding, I design.
                <br />
                <br />
              </p>
              <ul className="actions">
                <li>
                  <a href="#one" className="button scrolly">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </section>
        )
    }
}

export default Header
