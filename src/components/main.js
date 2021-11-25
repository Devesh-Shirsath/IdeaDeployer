import React, { useState, useEffect } from "react";
import Card from "./card";
import Rightsidebar from "./rightsidebar";

function Main() {
    return (
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="row">
                    <Card />
                    <Rightsidebar />
                </div>
            </section>
        </main>
    );
}

export default Main;