import "./Updates.css";
import Banner from "../../components/banner/Banner.jsx";

export default function Updates() {
  return (
    <main id="updates">
      <Banner
        title="Game Updates"
        subtitle="Good things come to those who bait."
        className="banner--updates"
      />

      <div className="updates-content">
        {/* Coming Soon */}
        <section className="section">
          <h2>Coming Soon</h2>
          <p>
            We’re constantly expanding FishHub with new content and features to
            keep the waters fresh. Here’s a sneak peek at what’s on the horizon:
          </p>
          <ul>
            <li>Joinable lobbies</li>
            <li>New purchasable items in the shop</li>
            <li>Additional maps to explore</li>
            <li>Rivers with unique fishing spots</li>
            <li>Improved fishing mechanics and mini-games</li>
          </ul>
        </section>

        {/* Latest Updates */}
        <section className="section">
          <h2>Latest Updates</h2>
          <p>
            Check out the newest features and improvements we’ve recently added
            to FishHub:
          </p>
          <ul>
            <li>Introduced 16 new fish species</li>
            <li>Implemented the in-game shop UI</li>
            <li>Added a persistent global leaderboard</li>
            <li>General bug fixes and performance enhancements</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
