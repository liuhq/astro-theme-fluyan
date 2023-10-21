import SiteConfig from "#/SiteConfig.ts";
import OverflowMenu from "#components/PostCard/OverflowMenu.tsx";
import {
    InteractionTag,
    InteractionTagPrimary,
    makeStyles,
    Overflow,
    OverflowItem,
    TagGroup,
    tokens
} from "@fluentui/react-components";

const page = SiteConfig.navBar.url.tags;

export default function Tags({ tags }: Props) {
    const styles = useStyles();

    const handleClick = (tag: string) => {
        window.location.href = `${ page }/${ tag }`;
    };

    return (
        <Overflow padding={ 60 }>
            <TagGroup className={ styles.tagGroup } size={ "small" }>
                {
                    tags.map((v, i) => {
                        return (
                            <OverflowItem id={ i.toString() } key={ i }>
                                <InteractionTag>
                                    <InteractionTagPrimary primaryText={ v }
                                                           onClick={ () => handleClick(v) }
                                    />
                                </InteractionTag>
                            </OverflowItem>
                        );
                    })
                }
                <OverflowMenu tags={ tags } />
            </TagGroup>
        </Overflow>
    );
}

interface Props {
    tags: Array<string>;
}

const useStyles = makeStyles({
    tagGroup: {
        width: "100%",
        marginTop: tokens.spacingVerticalS
    }
});
