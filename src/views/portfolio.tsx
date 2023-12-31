import {useRef} from "react";

import {Header} from "../components/header";
import {Navbar} from "../components/ui/navbar";
import {Projects} from "../components/projects";
import {Skills} from "../components/skills";
import {Contact} from "../components/contact";

export function Portfolio() {
    const headerRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className="h-screen overflow-y-auto bg-no-repeat bg-cover bg-primary bg-hero-pattern scroll-smooth font-monserrat">
            <Navbar contactRef={contactRef} headerRef={headerRef} projectsRef={projectsRef} skillsRef={skillsRef} />
            <Header headerRef={headerRef} />
            <Projects projectsRef={projectsRef} />
            <Skills skillsRef={skillsRef} />
            <Contact contactRef={contactRef} />
        </div>
    );
}
