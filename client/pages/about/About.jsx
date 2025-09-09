import { Link } from "react-router-dom";
import "./About.css";
import Banner from "../../components/banner/Banner.jsx";

export default function About() {
  return (
    <main id="about">
      <Banner
        title="About FishHub"
        subtitle="A bad day’s fishing is still better than a good day’s work."
        className="banner--about"
      />

      <div className="content">
        {/* Game Overview */}
        <section className="section">
          <h2>About the Game</h2>
          <p className="intro">
            FishHub is a real-time, multiplayer fishing experience that blends
            relaxation, competition, and community. Cast your line, reel in
            unique catches, and connect with players from around the world.
          </p>
          <p>
            Whether you’re climbing the leaderboards, collecting legendary
            species, or simply enjoying a casual session with friends, FishHub
            delivers the excitement of fishing in a fun and social environment.
          </p>
        </section>

        {/* Getting Started */}
        <section className="section">
          <h2>Getting Started</h2>
          <ol>
            <li>
              Click <strong>Play Now</strong> on the homepage and create your
              account.
            </li>
            <li>
              Join or create a lobby, then walk to an empty fishing hole to
              begin.
            </li>
            <li>
              Reel in fish, interact with other players, and rise up the
              leaderboards.
            </li>
          </ol>
        </section>

        {/* Gameplay & Progression */}
        <section className="section">
          <h2>Gameplay & Progression</h2>
          <ol>
            <li>
              Catching fish rewards you with coins, which can be spent on new
              gear in the shop.
            </li>
            <li>
              Upgraded equipment increases your chances of securing rare and
              valuable fish.
            </li>
            <li>
              Fish are ranked by rarity: common, uncommon, rare, and legendary.
              Larger and rarer fish grant more coins and boost your chances of
              reaching the leaderboard.
            </li>
          </ol>
        </section>

        {/* Fishing Minigame Tutorial */}
        <section className="section">
          <h2>Fishing Minigame Tutorial</h2>
          <p>
            When a fish bites, a mini-game will appear with a hook meter. Your
            goal is to reel the hook to the surface without snapping the line.
            The red bar indicates line tension—if it fills completely, the fish
            escapes.
          </p>
          <ol>
            <li>
              On desktop, hold the left or right mouse button to reel in, but
              only when the hook isn’t being tugged.
            </li>
            <li>
              Successfully guide the hook to the top of the meter to secure your
              catch.
            </li>
          </ol>
        </section>

        {/* Behind the Scenes */}
        <section className="section">
          <h2>Behind the Scenes</h2>
          <p>
            FishHub was developed as a full-stack web application, designed to
            deliver smooth, real-time multiplayer gameplay. The client is built
            with <strong>React</strong> and <strong>Phaser</strong> for
            interactive graphics, while the server runs on{" "}
            <strong>Node.js/Express</strong> with <strong>Socket.IO</strong> to
            power real-time communication. Persistent player data is managed
            through a <strong>SQL database</strong> using{" "}
            <strong>Prisma</strong>.
          </p>
        </section>

        {/* Contact */}
        <section className="section contact-support">
          <div className="contact-box">
            <h2>Contact</h2>
            <p>
              Have questions, feedback, or suggestions? Reach out through our{" "}
              <Link to="/contact">Contact Page</Link>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
