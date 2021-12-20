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

                        {/* =================== new block -================ */}
                            <section class="hero is-info is-bold is-small promo-block">
                                <div class="hero-body2">
                                    <div class="container">
                                        
                                    </div>
                                </div>
                            </section>
                            {/* <!-- END PROMO BLOCK --> */}
                            {/* <!-- START ARTICLE --> */}
                            <div class="card article">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content has-text-centered">
                                        </div>
                                    </div>
                                    <div class="content article-body">
                                        <p>
                                        Edward Gaming mid laner Lee “Scout” Ye-chan earned the Worlds 2021 final OPPO MVP award for his outstanding performance while playing four different champions across the five games against DWG KIA.
                                        </p>
                                        <p>
                                            Game 1: Ryze 6/1/8 (victory)
                                        </p>
                                        <p>
                                        Game 2: LeBlanc 0/5/1 (defeat)
                                        </p>
                                        <p>
                                        Game 3: Twisted Fate 2/4/5 (defeat)
                                        </p>
                                        <p>
                                        Game 4: Zoe: 1/1/3 (victory)
                                        </p>
                                        <p>
                                        Game 5: Zoe: 5/1/8 (victory)
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