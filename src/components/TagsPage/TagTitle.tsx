import SiteConfig from "#/SiteConfig.ts";
// import { LargeTitle } from "@fluentui/react-components";
/* FIXME: I don't knew how to resolve the error, but this works :) */
import pkg from "@fluentui/react-components";

const { LargeTitle } = pkg;
const { tagPage } = SiteConfig;

export default function TagTitle({ tag }: Props) {
    return (
        <LargeTitle>{ `${ tagPage.tagTitle }${ tag }` }</LargeTitle>
    );
}

interface Props {
    tag: string;
}
