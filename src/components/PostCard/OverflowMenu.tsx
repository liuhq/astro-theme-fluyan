import OverflowMenuItem from "#components/PostCard/OverflowMenuItem.tsx";
import {
    InteractionTag,
    InteractionTagPrimary,
    Menu,
    MenuList,
    MenuPopover,
    MenuTrigger,
    useOverflowMenu
} from "@fluentui/react-components";

export default function OverflowMenu({ tags }: { tags: Array<string> }) {
    const {
        ref,
        isOverflowing,
        overflowCount
    } = useOverflowMenu<HTMLButtonElement>();

    if (!isOverflowing) return null;

    return (
        <InteractionTag>
            <Menu mountNode={ document.querySelector("#popover-layout") }>
                <MenuTrigger disableButtonEnhancement>
                    <InteractionTagPrimary ref={ ref } primaryText={ `+${ overflowCount }` } />
                </MenuTrigger>
                <MenuPopover>
                    <MenuList>
                        {
                            tags.map((v, i) => <OverflowMenuItem key={ i } tag={ v } id={ i.toString() } />)
                        }
                    </MenuList>
                </MenuPopover>
            </Menu>
        </InteractionTag>
    );
}
