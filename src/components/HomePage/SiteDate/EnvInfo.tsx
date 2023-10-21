import { Caption1, makeStyles, shorthands, Text, tokens } from "@fluentui/react-components";
import { dependencies, version } from "package.json";

export default function EnvInfo() {
    return (
        <div>
            <Content info={ "Site version:" } version={ version } />
            <Content info={ "React version:" } version={ dependencies.react.split("^")[1] } />
            <Content info={ "Astro version:" } version={ dependencies.astro.split("^")[1] } />
            <Content info={ "FluentUI version:" }
                     version={ dependencies["@fluentui/react-components"].split("^")[1] }
            />
        </div>
    );
}


function Content({ info, version }: { info: string, version: string }) {
    const styles = useContentStyles();

    return (
        <div className={ styles.content }>
            <Caption1 block>{ info }</Caption1>
            <Text block font={ "monospace" } size={ 200 }>{ version }</Text>
        </div>
    );
}

const useContentStyles = makeStyles({
    content: {
        display: "flex",
        justifyContent: "space-between",
        ...shorthands.gap(tokens.spacingHorizontalL, 0)
    }
});
