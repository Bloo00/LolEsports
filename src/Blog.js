import React, { Component } from 'react';
import './Blog.css';

class Blog extends Component {
    render() {
        return (
            // 'soemthing for now'
            <>
                {/* <!-- START NAV --> */}
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="../">
                                <img src="../images/bulma.png" alt="Logo" />
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item is-active">
                                    Home
                                </a>
                                <a class="navbar-item">
                                    Examples
                                </a>
                                <a class="navbar-item">
                                    Features
                                </a>
                                <a class="navbar-item">
                                    Team
                                </a>
                                <a class="navbar-item">
                                    Archives
                                </a>
                                <a class="navbar-item">
                                    Help
                                </a>
                                <div class="navbar-item has-dropdown is-hoverable">
                                    <a class="navbar-link">
                                        Account
                                    </a>
                                    <div class="navbar-dropdown">
                                        <a class="navbar-item">
                                            Dashboard
                                        </a>
                                        <a class="navbar-item">
                                            Profile
                                        </a>
                                        <a class="navbar-item">
                                            Settings
                                        </a>
                                        <hr class="navbar-divider" />
                                        <div class="navbar-item">
                                            Logout
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <!-- END NAV --> */}

                <section class="hero is-info is-medium is-bold">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                        </div>
                    </div>
                </section>


                <div class="container">
                    {/* <!-- START ARTICLE FEED --> */}
                    <section class="articles">
                        <div class="column is-8 is-offset-2">
                            {/* <!-- START ARTICLE --> */}
                            <div class="card article">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content has-text-centered">
                                            <p class="title article-title">DECEMBER 14, 2021 - BY LOLESPORTS STAFF</p>
                                        </div>
                                    </div>
                                    <div class="content article-body">
                                        <h1 class="has-text-centered clecbrating">Celebrating Worlds 2021</h1>
                                        <p> Breakin’ records. Makin’ history.<br /><br />
                                            The 11th World Championship was a success, but the journey to that success wasn’t easy. Just when we thought the pandemic couldn’t get worse… the Delta variant hit. To ensure all teams could travel to Worlds with their best players, we made a pivot of our multi-city tour around China to Reykjavik, Iceland, where we hosted the Mid-Season Invitational back in May. We had to forgo a live audience. We had to adjust our Show Open presentation. All in less than two months! Through tireless dedication and countless hours, we were able to execute another record-breaking year.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END ARTICLE --> */}
                            {/* <!-- START ARTICLE --> */}
                            {/* ========================= have a video here ========================= */}
                            <div class="card article">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content has-text-centered">

                                        </div>
                                    </div>
                                    <div class="content article-body">
                                        <p>
                                        Worlds 2021 opened with the Play-In stage on October 5 with LCK's Hanwha Life Esports vs the LPL's LNG Esports, setting the tone for what turned out to be an action-packed Worlds (and foreshadowed the Finals showdown between the LCK and LPL). During the Group stage, the LCS’s Cloud9 made a heroic lift to go from 0-3 to taking second in a group that was arguably the most competitive. This all resulted in Worlds 2021 Play-Ins and Group Stages that hit the highest viewership in the Western Hemisphere in Worlds tournament history.
                                        </p>
                                        Quarterfinals and Semifinals weren’t short of action, either. T1, Gen.G, and DWG KIA may have made quick work of their opponents in the quarters (HLE, C9, MAD Lions, all 3-0), but Edward Gaming brought us to the first five-game series of the tournament versus MSI 2021 champions Royal Never Give Up. Then, the much-anticipated showdown between DK and T1 in the semis was taken to a heated best-of-five series, where DK was able to dash the hopes of Faker and the T1 dynasty. On the other side of the bracket, EDG and Gen.G also went to a five-game series, with EDG ascending to the Worlds Finals stage for the first time in the organization’s history.
                                        <p>
                                        </p>
                                        <p>
                                        Across 121 games played during Worlds 2021, we got to hear Silver Scrapes four times as we came down to the wire during the Knockout Stage. Even our Worlds Final showdown between the LCK’s DWG KIA and the LPL’s Edward Gaming resulted in a best-of-five games, the first five-game Finals series since 2016 and only the second in Worlds history.
                                        </p>
                                        <p>
                                            to be cont...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END ARTICLE --> */}
                            {/* <!-- START PROMO BLOCK --> */}
                            <section class="hero is-info is-bold is-small promo-block">
                                <div class="hero-body2">
                                    <div class="container">
                                        <h1 class="title">
                                            <i class="fa fa-bell-o"></i> Nemo enim ipsam voluptatem quia.</h1>
                                        <span class="tag is-black is-medium is-rounded">
                                            Natus error sit voluptatem
                                        </span>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- END PROMO BLOCK --> */}
                            {/* <!-- START ARTICLE --> */}
                            <div class="card article">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-center">
                                            <img src="https://res.cloudinary.com/ameo/image/upload/v1639144778/typocat_svbspx.png" class="author-image" alt="Placeholder image" />
                                        </div>
                                        <div class="media-content has-text-centered">
                                            <p class="title article-title">Cras tincidunt lobortis feugiat vivamus.</p>
                                            <p class="subtitle is-6 article-subtitle">
                                                <a href="#">@angela</a> on October 7, 202X
                                            </p>
                                        </div>
                                    </div>
                                    <div class="content article-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas. Sapien eget mi proin sed. Sit amet mattis vulputate enim.
                                        </p>
                                        <p>
                                            Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non. Proin fermentum leo vel orci porta non pulvinar. Imperdiet proin fermentum leo vel. Tortor posuere ac ut consequat semper viverra. Vestibulum lectus mauris ultrices eros.
                                        </p>
                                        <h3 class="has-text-centered">“Everyone should be able to do one card trick, tell two jokes, and recite three poems, in case they are ever trapped in an elevator.”</h3>
                                        <p>
                                            In eu mi bibendum neque egestas congue quisque egestas diam. Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in. At in tellus integer feugiat scelerisque varius morbi enim nunc. Vitae suscipit tellus mauris a diam.
                                            Arcu non sodales neque sodales ut etiam sit amet.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END ARTICLE --> */}
                        </div>

                    </section>
                    {/* <!-- END ARTICLE FEED --> */}
                </div>

            </>

        )
    };
}
export default Blog;