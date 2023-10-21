import { Body1, makeStyles, Title2, tokens, Tooltip } from "@fluentui/react-components";
import { useCallback } from "react";

export default function AuthorName({ author, bio }: Props) {
    const styles = useStyles();

    // cache bio
    const bio64char = useCallback(() => {
        return truncateBio(bio);
    }, [bio]);

    return (
        <div>
            <Title2 className={ styles.author }
                    children={ author }
            />
            { bio.length >= 64
              ? <Tooltip content={ bio }
                         mountNode={ document.querySelector("#popover-layout") }
                         relationship={ "description" }
              >
                  <Body1 className={ styles.bio }
                         children={ bio64char() }
                         truncate
                         wrap={ false }
                  />
              </Tooltip>
              : <Body1 className={ styles.bio }
                       children={ bio64char() }
                       truncate
                       wrap={ false }
              /> }
        </div>
    );
}

interface Props {
    author: string,
    bio: string
}

const useStyles = makeStyles({
    author: {
        paddingLeft: tokens.spacingHorizontalMNudge,
        paddingRight: tokens.spacingHorizontalMNudge
    },
    bio: {
        display: "inline-block",
        verticalAlign: "text-bottom",
        overflowX: "hidden",
        maxWidth: "360px",
    }
});

/**
 * limit bio to 64 characters
 * @param {string} content bio
 * @returns {string} the 64-characters bio is trailed by an ellipsis
 */
function truncateBio(content: string): string {
    if (content.length < 64) return content;

    const strings = content.trim()
        .split(/(\.{3}|\b\w+\b|\W)/, 61)
        .filter(i => i !== "");

    const result = new Array<string>();
    let charCount = 0;

    for (let string of strings) {
        charCount += string.length;
        if (charCount > 61) break;
        result.push(string);
    }

    result.push("...");

    return result.join("");
}
