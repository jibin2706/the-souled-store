import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer p-2 p-md-5">
      <div className="row">
        <div className="col-6 col-lg-3 mt-3">
          <h4 className="footer__header">Need help</h4>
          <div className="footer__links">
            <a href="">Contact Us</a>
            <a href="">FAQ</a>
            <a href="">Shipping & Tracking</a>
            <a href="">Return & Exchange</a>
            <a href="">T&Cs</a>
          </div>
        </div>
        <div className="col-6 col-lg-3 mt-3">
          <h4 className="footer__header">Company</h4>
          <div className="footer__links">
            <a href="">About Us</a>
            <a href="">Schools & College</a>
            <a href="">Bulk Orders</a>
            <a href="">Careers</a>
          </div>
        </div>
        <div className="col-6 col-lg-3 mt-3">
          <h4 className="footer__header">More info</h4>
          <div className="footer__links">
            <a href="">My Account</a>
            <a href="">Gift Vouchers</a>
            <a href="">Souled Army</a>
            <a href="">Sell your artwork</a>
            <a href="">Sitemap</a>
          </div>
        </div>
        <div className="col-6 col-lg-3 mt-3">
          <div>
            <p className="footer__info">COD Available</p>
            <p className="footer__info">15 Day Easy Returns</p>
          </div>
        </div>
      </div>

      <Accordion className="mt-5">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" className="footer__header">
            Navigation Links
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Navigation links</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1" className="footer__header">
            Who we are
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                The Souled Store was born out of the simple idea of loving what you do - following your soul – and, of
                course, our love for puns (sold/ souled). Our philosophy is just as simple- life is short, don’t spend
                it doing something you don’t like. From our products to our website, from our office culture to the way
                we interact with our customers, this philosophy’s a part of everything we do.
              </p>
              <p>
                In June 2013, The Souled Store was founded by four people, with just a cupboard full of t-shirts
                (probably as big as yours). Although we’ve grown from cupboards to warehouses, a lot of things have
                remained the same. Our core values are now shared not by just four people, but by a team that’s now
                grown to over a hundred people.
              </p>
              <p>
                <h5>The Neighbourhood Store Vibe</h5>
                We aspire to be your favourite, friendly neighbourhood store. We curate all your favourite designs and
                make them available on various products ranging from t-shirts, bags, and badges to phone covers,
                stickers, notebooks, and more. We’re always enthusiastic and kicked about interacting with everyone-
                whether it’s handling queries over email and social media or interacting with our fans at various
                events, workshops, and stalls. Why? Because we care. A recent study by our in-house, prize-winning, and
                totally unbiased researchers showed that visiting www.thesouledstore.com causes excessive happiness, and
                could increase your lifespan by up to 7.5%.
              </p>
              <p>
                <h5>The ‘POP’</h5>
                Defined as “modern popular culture transmitted via the mass media and aimed particularly at younger
                people,” pop culture changes rapidly based on trends and events. Be it movies, TV shows, stand-up
                comedians, sports, or music- it’s constantly evolving. The Souled Store constantly adapts to provide you
                the freshest of products, with the best of designs, covering all your favourite fandoms. We put the
                ‘pop’ in pop culture.
              </p>
              <p>
                <h5>All of this for YOU</h5>
                We help you express yourself through our wide collection of products available online. The collection is
                extensive and features menswear and womenswear. Our t-shirts online reflect the latest trends. We have
                official merchandise for Hollywood and Bollywood movies, your favourite TV shows, as well as top sports
                teams- there’s something for everyone! With your love and support, The Souled Store has grown to over 1
                million fans on Facebook, 200,000 followers on Instagram and the numbers are growing as we type this.
                We’re grateful to have you as a part of our journey to spread love to more and more Souledsters all
                over.
              </p>
              <p>
                <h5>Our Collection</h5>
                Our product range contains a mix of apparel and accessories. Apparels include t-shirts (round necks and
                polos), t-shirt dresses, boxers, hoodies, jerseys, and socks. The accessories include backpacks, duffle
                bags, tote bags, badgers, stickers, mugs, notebooks (diaries), magnets, posters, action figures,
                keychains, and mobile covers.
              </p>
              <p>
                <h5>Our Ethos</h5>
                While we are a fun loving, pop culture brand, as a company that interacts so actively with various
                people from diverse backgrounds, we have a larger, more responsible role to play. We try and lend
                support to a variety of causes that we are passionate about and do our bit to give back.
              </p>
              <p>
                Most recently, we launched a campaign in collaboration with GiveHer5, a social initiative, to provide
                safe, affordable sanitary solutions to women in rural areas. We worked enthusiastically to design a wide
                range of merchandise, featuring themes of female empowerment, feminism, and gender equality, to raise
                funds and fight period poverty. Every t-shirt sold = 1 girl’s yearly requirement of sanitary napkins.
                Through sustained efforts of the GiveHer5 team and with the help of a lot of celebrities who lent their
                support, we were able to help over 1,000 girls and women, a number we’re super proud of!
              </p>
              <p>
                <h5>Welcome Aboard</h5>
                We’re always looking for awesome people!
              </p>
              <p>
                As a company growing fast, in a country brimming with talent, The Souled Store is always looking for you
                fun, talented people to join and contribute to what we’re trying to build. Our workspace is a highly
                dynamic and positive space, where ideas are encouraged, creativity is rewarded, leadership and
                initiative are valued, and quirkiness is essential. This ties back to our founding philosophy – do what
                you love, and don’t waste a moment doing something you don’t like. Most of our company’s souls have cast
                away mundane corporate jobs, and haven’t looked back since. Our Mondays are without blues, and are just
                as crazy as our Fridays. Thinking on your feet and finding innovative solutions to all kinds of tasks is
                part of the job. If you think this is where you belong, look up our available positions on our ‘Careers’
                page. The Souled Store is not just a website or an organisation but a community of like-minded people
                getting together and expressing themselves through their work. WARNING: Chill vibes only.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <div className="text-center mt-5">The Souled Store 2018-19</div>
    </footer>
  );
}

export default Footer;
