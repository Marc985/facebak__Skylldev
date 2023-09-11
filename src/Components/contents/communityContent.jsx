import React from "react";
import CommunityCards from "../communityCards/communityCards.jsx";
import card1 from "../../assets/imgs/card1.jpeg";

const CommunityContent = () => {
    return (
        <div className="container mx-auto">
            {/* une section qui permettra à l'utilisateur de découvrir && || joindre une communauté */}

            <div>
                <h1 className="p-6 uppercase">Discover communities</h1>
                <div>
                    <div className="flex flex-wrap gap-5 justify-center">
                        <div>
                            <CommunityCards
                                title="Photography Enthusiasts"
                                image={card1}
                                descriptions={
                                    <div>
                                        <p>
                                            A group where members can share
                                            their photos, discuss photography
                                            techniques, give tips, and receive
                                            feedback on their work.
                                        </p>
                                    </div>
                                }
                            />
                        </div>
                        <div>
                            <CommunityCards
                                title="Photography Enthusiasts"
                                image={card1}
                                descriptions={
                                    <div>
                                        <p>
                                            A group where members can share
                                            their photos, discuss photography
                                            techniques, give tips, and receive
                                            feedback on their work.
                                        </p>
                                    </div>
                                }
                            />
                        </div>

                        <div>
                            <CommunityCards
                                title="Photography Enthusiasts"
                                image={card1}
                                descriptions={
                                    <div>
                                        <p>
                                            A group where members can share
                                            their photos, discuss photography
                                            techniques, give tips, and receive
                                            feedback on their work.
                                        </p>
                                    </div>
                                }
                            />
                        </div>

                        <div>
                            <CommunityCards
                                title="Photography Enthusiasts"
                                image={card1}
                                descriptions={
                                    <div>
                                        <p>
                                            A group where members can share
                                            their photos, discuss photography
                                            techniques, give tips, and receive
                                            feedback on their work.
                                        </p>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* une section pour consulter les communauté auxquelq il appartient déjà */}
        </div>
    );
};

export default CommunityContent;
