import {motion} from "framer-motion";

import {projectsTranslate} from "@/i18n/projects-translates";
import {useLanguageStore} from "@/stores/language-store";

interface Props {
    image: string;
    name: string;
    description: string;
    deploy: string;
    repository: string;
}

export function ProjectCard({image, name, description, deploy, repository}: Props) {
    const language = useLanguageStore((state) => state.languageValue);
    const projectsTranslated = projectsTranslate[language];

    const item = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const buttonStyle =
        "px-3 text-[#DFD9FF] transition-transform duration-300 bg-[#100d25] rounded-md active:scale-100 shadow-primary shadow-md hover:scale-110";

    return (
        <motion.article
            className="rounded-xl max-w-[350px] bg-[#100D25] p-2 flex flex-col justify-between gap-2 hover:bg-[#151030]"
            variants={item}
        >
            <div className="flex flex-col">
                <img alt="project image" className="rounded-t-lg select-none" src={image} width={"334"} />
                <h2 className="px-3 pt-2 font-bold">{name}</h2>
                <p className="px-3 pt-[2px] text-sm leading-snug text-[#DFD9FF]">{description}</p>
            </div>
            <div className="flex justify-center gap-6 py-1 text-sm">
                <a className={buttonStyle} href={deploy} rel="noreferrer" target="_blank">
                    {projectsTranslated.projectCard.deploy}
                </a>
                <a className={buttonStyle} href={repository} rel="noreferrer" target="_blank">
                    {projectsTranslated.projectCard.repository}
                </a>
            </div>
        </motion.article>
    );
}

// TODO: Implement deploy buttons
